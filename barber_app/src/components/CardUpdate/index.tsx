import CardContainer from "../CardContainer";
import React, { ReactNode } from "react";
import {View, ViewStyle, TextStyle, Text, Image, ImageSourcePropType} from 'react-native';
import {styles} from './styles';
import Button from "../Button";
import ClockIcon from '../../assets/icons/ic_Relogio.svg';
import PercentIcon from '../../assets/icons/ic_dinheiro.svg';
import EditIcon from '../../assets/icons/ic_editar.svg';
import DeleteIcon from '../../assets/icons/ic_excluir.svg';
import PhoneIcon from '../../assets/icons/ic_telefone.svg';
import CalendarImageSource from '../../assets/images/img_calendarioCinza.png';


type Props = {
    label?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    children?: ReactNode;
    onEdit?: () => void;
    onRemove?: () => void;

    //Props para Serviços
    description?: string;
    duration?: string;
    commission?: string;
    price?: string;

    //Props para Equipe
    specialties?: string[];
    profileImage?: ImageSourcePropType;
    email?: string;
    phone?: string;
    dateSince?: string;
}


export const CardUpdate = ({
    label, 
    style, 
    textStyle, 
    children,
    onEdit,
    onRemove,
    description,
    duration,
    commission,
    price,
    specialties,
    profileImage,
    email,
    phone,
    dateSince
}: Props) => {
    const isServiceCard = description || duration || commission || price;
    const isTeamCard = profileImage || email || phone || dateSince || (specialties && specialties.length > 0);

    return(
        <CardContainer>
            
            {isTeamCard && (
                <View style={styles.headerTeam}>
                    {profileImage && (
                        <Image source={profileImage} style={styles.profileImage}/>
                    )}
                    <View style={styles.headerTextContainerTeam}>
                        <Text style={[styles.title, textStyle]}>{label}</Text>
                        {email && <Text style={styles.text}>{email}</Text>}
                    </View>
                </View>
            )}

            {isServiceCard && (
                <View style={styles.headerService}>
                    <Text style={[styles.title, textStyle]}>{label}</Text>
                    {price && <Text style={styles.priceText}>{price}</Text>}
                </View>
            )}

            {/* Descrição do Serviço */}
            {description && (
                <Text style={styles.text}>{description}</Text>
            )}

            {/* Equipe - Tags Especialidades */}
            {isTeamCard && specialties && specialties.length > 0 && (
                <View style={styles.specialtiesContainer}>
                    {specialties.map((specialty, index) => (
                        <View key={index} style={styles.specialtyTag}>
                            <Text style={styles.specialtyText}>{specialty}</Text>
                        </View>
                    ))}
                </View>
            )}

            {/* Serviços - Informações de Duração */}
            {duration && (
                <View style={styles.infoRow}>
                    <ClockIcon width={15} height={15} style={styles.infoIcon}/>
                    <Text style={styles.text}>{duration}</Text>
                </View>
            )}

            {/* Serviços - Informações de Comissão */}
            {commission && (
                <View style={styles.infoRow}>
                    <PercentIcon width={15} height={15} style={styles.infoIcon}/>
                    <Text style={styles.text}>{commission}</Text>
                </View>
            )}

            {/* Equipe - Informações de Contato  */}
            {isTeamCard && phone && (
                <View style={styles.infoRow}>
                    <PhoneIcon width={15} height={15} style={styles.infoIcon} />
                    <Text style={styles.text}>{phone}</Text>
                </View>
            )}

            {/* Equipe - Informações da Data de Ingresso  */}
            {isTeamCard && dateSince && (
                <View style={styles.infoRow}>
                    <Image source={CalendarImageSource} style={[styles.infoIcon, { width: 15, height: 15 }]} />  
                    <Text style={styles.text}>{dateSince}</Text>
                </View>
            )}

            {/* Linha Separadora */}
            {(isServiceCard || isTeamCard) && <View style={styles.separator} />}

            {/* Botões Editar e Excluir */}
            <View style={styles.actionsContainer}>
                <Button
                    label="Editar"
                    onPress={onEdit}
                    icon={EditIcon}
                    style={styles.editButton}
                    textStyle={styles.editButtonText}
                    iconColor="#080852"
                    iconSize={17}
                />
                <Button
                    label="Excluir"
                    onPress={onRemove}
                    icon={DeleteIcon}
                    style={styles.removeButton}
                    textStyle={styles.removeButtonText}
                    iconColor="#FF3033"
                    iconSize={17}
                />
            </View>

        </CardContainer>
    );
};