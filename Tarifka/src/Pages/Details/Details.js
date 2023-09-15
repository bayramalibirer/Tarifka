import React from 'react';
import {View, Linking,FlatList } from 'react-native';
import Card from '../../Components/DetailsCard';
import styles from './Details.style';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../assets/loading';

const DetailsPage = ({route}) => {
    const {itemName} = route.params;
    
    const {data, loading} = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemName}`)


    if(loading){
        return <Loading/>
    }
    return(
        <View style={styles.container}>
            <FlatList
            data={data.meals}
            renderItem={({item}) => 
            <Card ImageUrl={item.strMealThumb} 
            CardInstructions={item.strInstructions}
            CardMeal={item.strMeal}
            CardArea={item.strArea}
            onPress={() => Linking.openURL(item.strYoutube) }/>}/>
        </View>
    );
};

export default DetailsPage;