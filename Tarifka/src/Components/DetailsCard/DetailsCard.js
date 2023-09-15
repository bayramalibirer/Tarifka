import React from 'react';
import { View, Text, Image,TouchableOpacity} from 'react-native';
import styles from './DetailsCard.style';

const Card = ({ImageUrl, CardMeal, CardInstructions,CardArea,onPress}) => {
    return(
        <View style={styles.container}>
            <Image
            source={{uri: ImageUrl}}
            style={styles.Image}
            />
            <Text style={styles.TextCardMeal}>{CardMeal}</Text>
            <Text style={styles.TextCardArea}>{CardArea}</Text>
            <View style={styles.View}></View>
            <Text>{CardInstructions}</Text>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.ButtonText}>Watch On Youtube</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Card;