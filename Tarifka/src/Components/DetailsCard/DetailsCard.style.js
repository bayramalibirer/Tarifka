import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1
    },
    Image:{
    width :Dimensions.get('window').width,
    height: Dimensions.get('window').height/3},
    TextCardMeal:{
        fontWeight:'bold',
        fontSize:30,
        color:'#b24c4c'
    },
    TextCardArea:{
        fontWeight:'bold',
        fontSize:20,
        color:'#b24c4c'
    },
    View:{
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding:3
    },
    button:{
        alignItems:'center',
        backgroundColor:'red',
        padding:18,
        margin:20,
        borderRadius:15,
        justifyContent: "center",
    },
    ButtonText:{
        fontWeight:'bold',
        color:'white',
        fontSize:16
    }
})