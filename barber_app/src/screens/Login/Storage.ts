import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const salvarTipoUsuario = async (tipo: string) => {
  try {
    await AsyncStorage.setItem('tipoUsuario', tipo);
  } catch (error) {
    console.error('Erro ao salvar tipo de usuário:', error);
  }
};

const obterTipoUsuario = async () => {
  try {
    const tipo = await AsyncStorage.getItem('tipoUsuario');
    return tipo;
  } catch (error) {
    console.error('Erro ao obter tipo de usuário:', error);
    return null;
  }
};

export {
    salvarTipoUsuario,
    obterTipoUsuario,
    verificaPerfilUsuario
}