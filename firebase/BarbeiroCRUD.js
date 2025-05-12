import { firebaseBD } from './firebaseConfig'; 
import { doc, setDoc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { Alert } from 'react-native';
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'; 


const cadastrarBarbeiro = (novoBarbeiro, barbeariaNome, navigation) => {
  firebaseBD.auth().createUserWithEmailAndPassword(novoBarbeiro.getEmail(), novoBarbeiro.getSenha())
    .then((userCredential) => {
      setDoc(doc(firebaseBD, `Barbearias/${barbeariaNome}/Barbeiros`, novoBarbeiro.getNome()), {
        nome: novoBarbeiro.getNome(),
        cpf: novoBarbeiro.getCpf(),
        dataNascimento: novoBarbeiro.getDataNascimento(),
        telefone: novoBarbeiro.getTelefone(),
        sexo: novoBarbeiro.getSexo(),
        email: novoBarbeiro.getEmail(),
        senha: novoBarbeiro.getSenha(),
        horarioServico: novoBarbeiro.getHorarioServico(),
        baiaTrabalho: novoBarbeiro.getBaiaTrabalho(),
        valorCortes: novoBarbeiro.getValorCortes(), 
        formasPagamento: novoBarbeiro.getFormasPagamento(),
        agenda: novoBarbeiro.getAgenda() 
      }).then(() => {
        Alert.alert("Barbeiro cadastrado com sucesso!");
        navigation.navigate("Login");
      }).catch((error) => {
        console.log("Erro ao cadastrar barbeiro:", error);
        Alert.alert("Erro", "Falha ao salvar dados do barbeiro.");
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

const editarBarbeiro = (nome, barbeariaNome, novosDados) => {
  const docRef = doc(firebaseBD, `Barbearias/${barbeariaNome}/Barbeiros/${nome}`);
  updateDoc(docRef, {
    nome: novosDados.nome,
    cpf: novosDados.cpf,
    dataNascimento: novosDados.dataNascimento,
    telefone: novosDados.telefone,
    sexo: novosDados.sexo,
    senha: novosDados.senha,
    horarioServico: novosDados.horarioServico,
    baiaTrabalho: novosDados.baiaTrabalho,
    valorCortes: novosDados.valorCortes,
    formasPagamento: novosDados.formasPagamento,
    agenda: novosDados.agenda
  }).then(() => {
    Alert.alert("Barbeiro atualizado com sucesso!");
  }).catch((error) => {
    console.log("Erro ao editar barbeiro:", error);
    Alert.alert("Erro", "Falha ao atualizar barbeiro.");
  });
};

const excluirBarbeiro = (nome, barbeariaEmail) => {
  deleteDoc(doc(firebaseBD, `Barbearias/${barbeariaEmail}/Barbeiros/${nome}`))
    .then(() => Alert.alert("Barbeiro excluído com sucesso!"))
    .catch((error) => {
      console.log("Erro:", error);
      Alert.alert("Erro", "Não foi possível excluir o barbeiro.");
    });
};
