import React,{Component} from 'react';
import { View, TextInput, Text, TouchableOpacity, AsyncStorage, Image, ActivityIndicator } from 'react-native';

import Styles from './style';
import Logo from '../../assets/logo.png'
import Alert from '../../utils/alert';

export default class StartPage extends Component{
  constructor(props){
    super(props);
    this.state = {
        name: "",
        waiting: false
    }
    const { socket, history } = this.props

    socket.on('mobile-start',(meme) => {
      AsyncStorage.setItem('meme',meme);
      history.push('/meme')
    });

    socket.on('mobile-attempt_join',(response) => {
      response ? this.setState({ waiting: true }) : Alert.roomAlert();
    });
  }

  joinGame = () => {
    const { name, room } = this.state;
    const { socket } = this.props; 
    if(!name || !room){
      Alert.inputAlert();
      return;
    }
    AsyncStorage.setItem("name",name);
    socket.emit('mobile-addPlayer',{ name, room });
  }

  render(){
    const { waiting } = this.state;
    const { container, textStyle, header, body, inputs, textInput, button, logo } = Styles;
    return(
      waiting ?
      <View style={ container }>
        <Text style={ textStyle}>Waiting for game to start</Text>
        <ActivityIndicator style={{ marginTop:40 }} size="large" color="#0000ff"/>
      </View>
      :
      <View style={ container }>
        <View style={ header }>
          <Image source={ Logo } style={ logo }/>
        </View>
        <View style={ body }>
          <View style={ inputs }>
            <TextInput style={ textInput }
              onChangeText={ (room) => this.setState({room}) }
              placeholder='Room Code'
            />
            <TextInput style={ textInput }
              onChangeText={ (name) => this.setState({name}) }
              placeholder='Name'
            />
          </View>
          <TouchableOpacity 
            style={ button }
            onPress={ this.joinGame }
          >
            <Text style = { textStyle }>Join Game</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}