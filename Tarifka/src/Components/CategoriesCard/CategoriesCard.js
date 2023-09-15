import React from 'react';
import { View,Text, Image,TouchableWithoutFeedback } from 'react-native';
import styles from './CategoriesCard.style';

const CardCategories = ({foodNames, ImageUrl,onPress}) => {
    return(
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.Card_View}>
            <Image 
            style={styles.Card_Image}
            source={{uri:ImageUrl }}
            />
            <Text style={styles.Card_Text}>{foodNames}</Text>
        </View>
        </TouchableWithoutFeedback>
    );
};


export default CardCategories;