import React from 'react';
import {FlatList,View} from 'react-native';
import Config from 'react-native-config';
import Card from '../../Components/MealsCard';
import styles from './Meals.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../assets/loading'

const Meals = ({route,navigation}) => {
    const {itemName} = route.params;

    const {data,loading} = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${itemName}`)

    if(loading){
        return <Loading/>
    }

    return(
        <View style={styles.View}>
        <FlatList
        data={data.meals}
        renderItem={({item}) => <Card ImageUrl={item.strMealThumb} 
        CardText={item.strMeal}
        onPress={() => navigation.navigate('Details',{itemName : item.idMeal})}/>}/>
        </View>
    )
};

export default Meals;