import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    View:{
        padding:15,
        paddingRight:100,
    },
    Image:{
        overflow: 'hidden',
        borderRadius:10,
        width: 360,
        height: Dimensions.get('window').height/5},
    Text:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
        },
    TextContainer:{
        position:'absolute',
        bottom:0,
        alignItems: "center",
        backgroundColor:'black',
        width: "100%",
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        }})