import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    button:{
        alignItems:'center',
        padding:30,
        borderRadius:10,
        borderColor:'#5E86F2',
        borderWidth:2,
        marginLeft: 30,
        marginRight: 30
    },
    buttonTextStyle: {
        fontSize:40,
        fontFamily:'monospace',
    },
    textStyle: {
        fontSize:20,
        fontFamily:'monospace',
    },
    header:{
        position: 'absolute',
        top: 80,
        fontSize:25,
        fontFamily:'monospace',
        fontWeight: 'bold'
    }
})