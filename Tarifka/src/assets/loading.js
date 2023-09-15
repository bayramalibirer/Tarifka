import React from 'react';
import Lottie from 'lottie-react-native';
import { View } from 'react-native';

export default function Animation() {
  return (
    <View style={{width:500,height:500,alignSelf:'center'}}>
    <Lottie source={require('./loading.json')} autoPlay loop/>
    </View>
  );
}