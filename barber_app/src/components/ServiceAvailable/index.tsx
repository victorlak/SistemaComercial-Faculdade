import React from 'react';
import IconMoney from '../../assets/icons/ic_dinheiro.svg';
import IconClock from '../../assets/icons/ic_Relogio.svg';
import IconEdit from '../../assets/icons/ic_editar.svg';
import IconExcluir from '../../assets/icons/ic_excluir.svg'
import { View, Text, Pressable } from 'react-native';
import CardContainer from '../CardContainer';
import { styles } from './styles';
import Button from '../Button';
import { PerfisUsuario } from '../../types/utils/ProfilesUserTypes'
import { useState } from 'react';
import { Input } from '../Input';
import { buscarLocalStorage } from '../../screens/Login/Storage';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../../services/firebaseConfig';

type ServicosRealizado = {
    id_servico: string;
    id_barbeiro: string | null;
    nomeDoCliente: string;
    descricaoDoServicoRealizado: string;
    metodoDePagamento: string;
    data: string;
    hora: string;
}

type Servico = {
    id: string;
    nome: string;
    preco: string;
    comissao: string;
    descricao: string;
    duracao: string;
};

type Props = {
    servico: Servico;
};

const ServiceAvailable = ({ servico }: Props) => {
    const [adicionando, setAdicionando] = useState(false)
    const [perfil, setPerfil] = useState<string | null>(null);
    const [nomeDoCliente, setNomeDoCliente] = useState<string>('')
    const [descricaoDoServicoRealizado,setDescricaoDoServicoRealizado ] = useState<string>('')
    const [metodoDePagamento,setMetodoDePagamento] = useState<string>('')
    const [id_perfil, setId_perfil] = useState<string | null>(null);

    async function obterUser() {
        let perfil = await buscarLocalStorage('perfil')
        let id_perfil = await buscarLocalStorage('id_logado')
        setPerfil(perfil)
        setId_perfil(id_perfil)
    }
    async function adicionarServicorRealizado(){
        const agora = new Date();
        let servicoRealizado: ServicosRealizado = {
            id_barbeiro: id_perfil,
            id_servico: servico.id,
            nomeDoCliente: nomeDoCliente,
            descricaoDoServicoRealizado: descricaoDoServicoRealizado,
            metodoDePagamento: metodoDePagamento,
            data: agora.toLocaleDateString(),
            hora: agora.toLocaleTimeString()  
        }
        await addDoc(collection(db, "ServicosRealizados"), servicoRealizado);

    }
    obterUser()

    return (

        <CardContainer>
            <Pressable onPress={() => { setAdicionando(!adicionando) }}>
                <View style={[styles.row, styles.allComponent]}>
                    <View>
                        <Text style={styles.styleTituloServico}>{servico.nome}</Text>
                    </View>
                    <View>
                        <Text style={styles.stylePreco}> R${servico.preco},00</Text>
                    </View>
                </View>
                <Text style={[styles.styleDescricao, styles.textoClaro]}>{servico.descricao}</Text>
                <View style={[styles.row, styles.styleTempoComissao]}>
                    <View style={styles.row}>
                        <IconClock fill="#8A8A8E" width={20} height={20} />
                        <Text style={styles.textoClaro}>{servico.duracao} min</Text>
                    </View>
                    <View style={styles.row}>
                        <IconMoney fill="#8A8A8E" width={20} height={20} />
                        <Text style={styles.textoClaro}>{servico.comissao}%comissão</Text>
                    </View>
                </View>
            </Pressable>
            {adicionando ?
                <View>
                    <text>Nome do Cliente</text>
                    <Input onChangeText={setNomeDoCliente} value={nomeDoCliente} />
                    <text>Descrição</text>
                    <Input onChangeText={setDescricaoDoServicoRealizado} value={descricaoDoServicoRealizado} />
                    <text>Método de pagamento</text>
                    <Input onChangeText={setMetodoDePagamento} value={metodoDePagamento} />
                    <Button onPress={adicionarServicorRealizado} label='Adicionar'></Button>
                </View>
                 : null
            }
            {perfil === 'ADM' ?
                <View style={[styles.row, styles.styleButton]}>

                    <Button style={styles.editButton} textStyle={styles.textEditButton} icone={<IconEdit fill='blue' />} label='Editar'></Button>
                    <Button style={styles.deletedButton} textStyle={styles.textDeleteButton} icone={<IconExcluir fill='red' />} label='Excluir'></Button>
                </View> : null
            }

        </CardContainer>



    );

};

export default ServiceAvailable;