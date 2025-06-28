import React from 'react';
import IconMoney from '../../assets/icons/ic_dinheiro.svg';
import IconClock from '../../assets/icons/ic_Relogio.svg';
import IconEdit from '../../assets/icons/ic_editar.svg';
import IconExcluir from '../../assets/icons/ic_excluir.svg'
import { View, Text } from 'react-native';
import CardContainer from '../CardContainer';
import { styles } from './styles';
import { Button } from 'react-native';

type Servico = {
    nome: string;
    preco: number;
    comissao: string;
    descricao: string;
    tempo: number;
};

type Props = {
    servico: Servico;
};

const ServiceAvailable = ({ servico }: Props) => {
    return (
        
            <CardContainer>
                <View style= {[styles.row, styles.allComponent]}>
                    <View>
                        <Text style={styles.styleTituloServico}>{servico.nome}</Text>
                    </View>
                    <View>
                        <Text style={styles.stylePreco}> R${servico.preco},00</Text>
                    </View>
                </View>
                <Text style={[styles.styleDescricao, styles.textoClaro]}>{servico.descricao}</Text>
                <View style= {[styles.row, styles.styleTempoComissao]}>
                    <View style={styles.row}>
                        <IconClock fill="#8A8A8E" width={20} height={20} />
                        <Text style={styles.textoClaro}>{servico.tempo} min</Text>
                    </View>
                    <View style={styles.row}>
                        <IconMoney fill="#8A8A8E" width={20} height={20} />
                        <Text style={styles.textoClaro}>{servico.comissao}comissão</Text>
                    </View>
                </View>
                <View style = {[styles.row, styles.styleButton]}>
                    <Button title='Editar'></Button> 
                    <Button title='Excluir'></Button> 
                </View>

            </CardContainer>
        
    );
};

export default ServiceAvailable;
