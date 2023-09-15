import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesPage from './Pages/Categories'
import MealsPage from './Pages/Meals';
import DetailsPage from './Pages/Details';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerTintColor:'orange'}}>
        <Stack.Screen name="Categories" component={CategoriesPage} />
        <Stack.Screen name="Meals" component={MealsPage} />
        <Stack.Screen name="Details" component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;