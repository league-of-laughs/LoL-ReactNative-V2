import {StyleSheet,Platform} from 'react-native';

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
        fontFamily:Platform.OS==='ios' ? 'courier':'monospace',
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
    logo:{
       height: 100,
       width:100,
       marginRight:20
    },
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        top:80
    },
    title:{
        fontSize:23,
        fontFamily:Platform.OS==='ios' ? 'courier':'monospace',
        fontWeight: 'bold'
    },
    textStyle: {
        fontSize:20,
        fontFamily:Platform.OS==='ios' ? 'courier':'monospace',
    }
})