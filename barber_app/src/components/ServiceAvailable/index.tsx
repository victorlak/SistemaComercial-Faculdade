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

type Servico = {
    nome: string;
    preco: string;
    comissao: string;
    descricao: string;
    duracao: string;
};

type Props = {
    servico: Servico;
    perfis: PerfisUsuario[];
};

const ServiceAvailable = ({ servico, perfis }: Props) => {
    const [adicionando, setAdicionando] = useState(false)
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
                    <Input />
                    <text>Descrição</text>
                    <Input />
                    <text>Método de pagamento</text>
                    <Input />
                </View> : null
            }
            {perfis.includes(PerfisUsuario.ADM) ?
                <View style={[styles.row, styles.styleButton]}>

                    <Button  style={styles.editButton} textStyle={styles.textEditButton} icone={<IconEdit fill='blue' />} label='Editar'></Button>
                    <Button style={styles.deletedButton} textStyle={styles.textDeleteButton} icone={<IconExcluir fill='red' />} label='Excluir'></Button>
                </View> : null
            }

        </CardContainer>



    );

};

export default ServiceAvailable;
