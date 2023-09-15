import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import styles from './Categories.style';
import Card from '../../Components/CategoriesCard';
import Config from "react-native-config";
import useFetch from '../../hooks/useFetch';
import Loading from '../../assets/loading'

const FirstPage = ({navigation}) => {
    const {data,loading} = useFetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)

   if(loading){
    return <Loading/>
   }
   
    return(
        <SafeAreaView style={styles.SafeAreaView}>
            <FlatList
            data={data.categories}
            renderItem={
                ({item}) => <Card foodNames={item.strCategory} 
                ImageUrl={item.strCategoryThumb} 
                onPress={() => navigation.navigate('Meals',{itemName : item.strCategory})}/>}
            />
       </SafeAreaView>
    );
};

export default FirstPage;