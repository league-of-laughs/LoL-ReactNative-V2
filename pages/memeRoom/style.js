import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        height: 40, 
        borderColor: 'white', 
        borderWidth: 1,
        width: '70%',
        textAlign: 'center',
        fontFamily:'monospace',
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        borderRadius: 3,
        marginBottom:30,
        marginTop:30,
        fontSize:20,
    },
    button:{
        alignItems:'center',
        padding:10,
        borderRadius:10,
        borderColor:'#5E86F2',
        borderWidth:2,
        position: 'absolute',
        bottom: 80
    },
    textStyle: {
        fontSize:20,
        fontFamily:'monospace',
    },
    header:{
        position: 'absolute',
        top: 80,
        fontSize:20,
        fontFamily:'monospace',
        fontWeight: 'bold'
    },
    headerBottom:{
        position: 'absolute',
        top: 110,
        fontSize:20,
        fontFamily:'monospace',
        fontWeight: 'bold'
    }
})