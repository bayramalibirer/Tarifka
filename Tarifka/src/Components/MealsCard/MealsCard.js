import React from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import styles from './MealsCard.style';

const Card = ({ImageUrl,CardText,onPress}) => {
    return(
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.View}>
            <ImageBackground
            style={styles.Image}
            source={{uri : ImageUrl}}>
            <View style={styles.TextContainer}>
            <Text style={styles.Text} numberOfLines={1}>{CardText}</Text>
            </View>
            </ImageBackground>
        </View>
        </TouchableWithoutFeedback>
    );
};

export default Card;