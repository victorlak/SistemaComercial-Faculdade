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
      const doc = snapshot.docs[0]; // só deve haver 1 resultado
      return doc.id;
    } else {
      return null; // não encontrou
    }
  } catch (error) {
    console.error("Erro ao buscar ID:", error);
    return null;
  }
}


async function verificaPerfilUsuario(email: String){
      const usuariosRef = collection(db, "Barbeiro");
  const q = query(usuariosRef, where("email", "==", email));

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    // Existe pelo menos um documento com o e-mail fornecido
    return 'BARBEIRO' // User é barbeiro;
  } else {
    // Nenhum documento encontrado
    return 'ADM' // User é ADM;
  }
}

const salvarLocalStorage = async (conteudo: string | null, key: string) => {
  try {
    await AsyncStorage.setItem(key, conteudo);
  } catch (error) {
    console.error('Erro ao salvar tipo de usuário:', error);
  }
};

const buscarLocalStorage = async (key: string | null) => {
  try {
    const conteudo = await AsyncStorage.getItem(key);
    return conteudo;
  } catch (error) {
    console.error('Erro ao obter tipo de usuário:', error);
    return '';
  }
};

export {
    salvarLocalStorage,
    buscarLocalStorage,
    verificaPerfilUsuario,
    buscarIdPorCampoUnico
}