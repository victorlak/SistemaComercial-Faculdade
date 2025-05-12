import { firebaseBD } from './firebaseConfig';
import { doc, setDoc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { Alert } from 'react-native';
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const cadastrarBarbearia = (barbearia, administradorNome, navigation) => {
  const docRef = doc(firebaseBD, `Administrador/${administradorNome}/Barbearias`, barbearia.ghetNome());

  getDoc(docRef).then((docSnap) => {
    if (docSnap.exists()) {
      Alert.alert("Erro", "Barbearia já cadastrada com esse e-mail.");
    } else {
      setDoc(docRef, {
        nome: barbearia.getNome(),
        cnpj: barbearia.getCnpj(),
        endereco: barbearia.getEndereco(),
        horarioFuncionamento: barbearia.getHorarioFuncionamento(),
        telefoneContato: barbearia.getTelefoneContato(),
        dono: barbearia.getDono(), // Nome do administrador
        barbeiros: barbearia.getBarbeiros(), // lista de e-mails
        numeroBaias: barbearia.getNumeroBaias(),
        valorComissao: barbearia.getValorComissao()
      }).then(() => {
        Alert.alert("Barbearia cadastrada com sucesso!");
        navigation.navigate("Login");
      }).catch((error) => {
        console.log("Erro ao cadastrar barbearia:", error);
        Alert.alert("Erro", "Falha ao salvar dados da barbearia.");
      });
    }
  });
};

const editarBarbearia = (nome, administradorNome, novosDados) => {
  const docRef = doc(firebaseBD, `Administrador/${administradorNome}/Barbearias/${nome}`, );
  updateDoc(docRef, {
    nome: novosDados.nome,
    cnpj: novosDados.cnpj,
    endereco: novosDados.endereco,
    horarioFuncionamento: novosDados.horarioFuncionamento,
    telefoneContato: novosDados.telefoneContato,
    dono: novosDados.dono,
    barbeiros: novosDados.barbeiros,
    numeroBaias: novosDados.numeroBaias,
    valorComissao: novosDados.valorComissao
  }).then(() => {
    Alert.alert("Barbearia atualizada com sucesso!");
  }).catch((error) => {
    console.log("Erro ao editar barbearia:", error);
    Alert.alert("Erro", "Falha ao atualizar barbearia.");
  });
};

const excluirBarbearia = (nome, administradorNome) => {
  deleteDoc(doc(firebaseBD, `Administrador/${administradorNome}/Barbearias/${nome}`))
    .then(() => Alert.alert("Barbearia excluída com sucesso!"))
    .catch((error) => {
      console.log("Erro:", error);
      Alert.alert("Erro", "Não foi possível excluir a barbearia.");
    });
};
