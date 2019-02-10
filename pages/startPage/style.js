import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    textInput:{
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        width: '50%',
        textAlign: 'center'
    },
    button:{
        alignItems:'center',
        padding:10,
        borderRadius:10,
        borderColor:'#5E86F2',
        borderWidth:2
    },
    logo:{
       height: 100,
       width:100,
       marginRight:20
    },
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    title:{
        fontSize:20,
        fontFamily:'sans-serif',
    },
})