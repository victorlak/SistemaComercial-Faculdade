import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';


async function buscarIdPorCampoUnico(
  email: string
): Promise<string | null> {
  try {
    const ref = collection(db, 'Barbeiro');
    const q = query(ref, where('email', "==", email));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return doc.id;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar ID:", error);
    return null;
  }
}


async function verificaPerfilUsuario(email: string){
    const usuariosRef = collection(db, "Barbeiro");
    const q = query(usuariosRef, where("email", "==", email));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        return 'BARBEIRO';
    } else {
        return 'ADM';
    }
}

const salvarLocalStorage = async (conteudo: string | null, key: string) => {
    try {
        // Se o conteúdo for null ou undefined, salve uma string vazia. Senão, salve o conteúdo.
        const valorParaSalvar = conteudo ?? '';
        await AsyncStorage.setItem(key, valorParaSalvar);
    } catch (error) {
        console.error(`Erro ao salvar a chave '${key}':`, error);
    }
};

const buscarLocalStorage = async (key: string) => {
    try {
        const conteudo = await AsyncStorage.getItem(key);
        return conteudo;
    } catch (error) {
        console.error('Erro ao obter tipo de usuário:', error);
        return null; // Retornar null em caso de erro é mais consistente
    }
};

export {
    salvarLocalStorage,
    buscarLocalStorage,
    verificaPerfilUsuario,
    buscarIdPorCampoUnico
}