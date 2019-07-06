import React,{Component} from 'react';
import { View, TextInput, Text, TouchableOpacity, AsyncStorage, Image, ActivityIndicator } from 'react-native';

import Header from '../../components/headers/start';
import Waiting from '../../components/waiting';
import Button from '../../components/button';
import CommonStyles from '../../styles/common';
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

    socket.on('mobile-start',() => {
      history.push('/meme')
    });

    socket.on('mobile-attempt_join',(response) => {
      response ? null : Alert.roomAlert();
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
    this.setState({ waiting: true });
  }

  render(){
    const { waiting } = this.state;
    const { container, header, body, inputs, textInput, logo } = CommonStyles;
    return(
      waiting ?
      <View style={ container }>
        <Header />
        <Waiting />
      </View>
      :
      <View style={ container }>
        <Header />
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
          <Button text="Join Game" onPress={ this.joinGame } />
        </View>
      </View>
    );
  }
}