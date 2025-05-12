import { firebaseBD } from './firebaseConfig'; 
import { doc, setDoc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { Alert } from 'react-native';
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'; 

// CADASTRO ADMINISTRADOR
const cadastrarAdministrador = (novoAdmin, navigation) => {
    firebaseBD.auth().createUserWithEmailAndPassword(novoAdmin.getEmail(), novoAdmin.getSenha())
        .then((userCredential) => {
        setDoc(doc(firebaseBD, `Administradores`, novoAdmin.getNome()), {
            nome: novoAdmin.getNome(),
            cpf: novoAdmin.getCpf(),
            dataNascimento: novoAdmin.getDataNascimento(),
            telefone: novoAdmin.getTelefone(),
            sexo: novoAdmin.getSexo(),
            email: novoAdmin.getEmail(),
            senha: novoAdmin.getSenha(),
            nomeBarbearia: novoAdmin.getNomeBarbearia(),
        }).then(() => {
            Alert.alert("Administrador cadastrado com sucesso!");
            navigation.navigate("Login");
        }).catch((error) => {
            console.log("Erro ao cadastrar administrador:", error);
            Alert.alert("Erro", "Falha ao salvar dados do administrador.");
        });
    })
    .catch((error) => {
        let errorMessage = tratarErroFirebase(error.code);
        Alert.alert("Erro no cadastro", errorMessage);
    });
};


const tratarErrosFirebase = (error) => {
    let errorMessage = '';
    switch (error.code) {
        case 'auth/email-already-in-use':
        errorMessage = 'O email fornecido já está em uso por outra conta.';
        break;
        case 'auth/invalid-email':
        errorMessage = 'O email fornecido é inválido.';
        break;
        case 'auth/weak-password':
        errorMessage = 'A senha fornecida é muito fraca. Escolha uma senha mais forte.';
        break;
        default:
        errorMessage = 'Ocorreu um erro ao cadastrar. Tente novamente.';
    }
    Alert.alert('Erro no cadastro', errorMessage);
    console.log(error);
};

const editarAdministrador = (nome, novosDados) => {
  const docRef = doc(firebaseBD, `Administradores/${nome}`);
  updateDoc(docRef, {
    nome: novosDados.nome,
    cpf: novosDados.cpf,
    dataNascimento: novosDados.dataNascimento,
    telefone: novosDados.telefone,
    sexo: novosDados.sexo,
    senha: novosDados.senha,
    nomeBarbearia: novosDados.nomeBarbearia,
  }).then(() => {
    Alert.alert("Administrador atualizado com sucesso!");
  }).catch((error) => {
    console.log("Erro ao editar administrador:", error);
    Alert.alert("Erro", "Falha ao atualizar administrador.");
  });
};

const excluirAdministrador = (nome) => {
  deleteDoc(doc(firebaseBD, `Administradores/${nome}`))
    .then(() => Alert.alert("Administrador excluído com sucesso!"))
    .catch((error) => {
      console.log("Erro:", error);
      Alert.alert("Erro", "Não foi possível excluir o administrador.");
    });
};
