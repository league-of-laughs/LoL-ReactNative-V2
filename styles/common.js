import { StyleSheet, Platform } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    backgroundColor:'#2A2A2E'
  },
  textInput:{
    height: 40, 
    borderColor: 'white', 
    borderWidth: 1,
    width: '70%',
    textAlign: 'center',
    fontFamily:Platform.OS==='ios' ? 'courier':'monospace',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    borderRadius: 3,
    marginBottom:30,
    marginTop:30,
    fontSize:20,
    textAlign: 'left'
  },
  button:{
    alignItems:'center',
    padding:10,
    borderRadius:25,
    position: 'absolute',
    bottom: 20,
    backgroundColor:'#2A2A2E',
    width: 300
  },
  voteButton:{
    alignItems:'center',
    padding:10,
    borderRadius:25,
    backgroundColor:'#2A2A2E',
    width: 300
  },
  logo:{
    height: 150,
    width:150,
  },
  logoText:{
    height: 80,
    width:80,
  },
  header:{
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#2A2A2E',
    height: '30%'
  },
  headerText:{
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#2A2A2E',
    height: '30%'
  },
  body:{
    overflow: 'hidden',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '70%',
},
inputs: {
  width: '100%', 
  display:'flex', 
  alignItems:'center',
  marginBottom: 100
},
  textStyle: {
    fontSize:20,
    fontFamily:Platform.OS==='ios' ? 'courier':'monospace',
    color: 'white'
  },
  headerTextStyle: {
    fontSize:20,
    fontFamily:Platform.OS==='ios' ? 'courier':'monospace',
    color: 'white',
    marginLeft: 20
  },
  waitingTextStyle: {
    fontSize:20,
    fontFamily:Platform.OS==='ios' ? 'courier':'monospace',
    color: 'black'
  }
});