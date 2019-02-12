import {StyleSheet,Platform} from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logo: {
        height: 200,
        width:200,
        marginBottom: 100
    },
    header:{
        position: 'absolute',
        top: 80,
        fontSize:25,
        fontFamily:Platform.OS==='ios' ? 'courier':'monospace',
        fontWeight: 'bold'
    },
    name:{
        fontSize:23,
        fontFamily:Platform.OS==='ios' ? 'courier':'monospace',
        marginBottom: 100
    },
    footer:{
        position: 'absolute',
        bottom: 80,
        fontSize:23,
        fontFamily:Platform.OS==='ios' ? 'courier':'monospace',
    }
})