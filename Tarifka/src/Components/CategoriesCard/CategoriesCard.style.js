import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    Card_View:{
        backgroundColor:'white',
        padding:10,
        margin:8,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:5,
        borderTopRightRadius:5,
        flexDirection:'row'
    },
    Card_Text:{
        color:'black',
        padding:10
    },
    Card_Image:{
        width: 70,
        minHeight: 50,
        resizeMode: "contain",
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        borderColor:'white'
}})