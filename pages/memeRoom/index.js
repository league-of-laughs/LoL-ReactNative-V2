import React,{Component} from 'react';
import {View,TextInput,Text,AsyncStorage,TouchableOpacity,Image,ActivityIndicator} from 'react-native';

import CommonStyles from '../../styles/common';
import Header from '../../components/headers/text';
import Button from '../../components/button';

export default class memeRoom extends Component{
    constructor(props){
        super(props);
        this.state = {
            topText:null,
            bottomText:null,
            waiting: false,
        }
        const {socket} = this.props;

        socket.on('mobile-startVoting',() => {
            this.props.history.push('/voting')
        })
    }


    componentDidMount(){
        console.log('entered meme room')
    }

    sendMeme = async () => {
        const {socket} = this.props;
        let name = await AsyncStorage.getItem("name");
        console.log(name);
        let {topText,bottomText} = this.state;

        let data = {
            name,
            topText,
            bottomText
        }

        socket.emit('mobile-uploadMeme',JSON.stringify(data));
        this.setState({waiting:true})
    }
    render(){
      const { waiting } = this.state;
      const { container, body, inputs, textInput } = CommonStyles;
      return(
        waiting ?
        <View style={ container }>
          <Header text = "Fill out the meme"/>
          <Waiting />
        </View>
        :
        <View style={ container }>
          <Header text = "Fill out the meme"/>
          <View style={ body }>
            <View style={ inputs }>
              <TextInput style={ textInput }
                onChangeText={ (topText) => this.setState({ topText }) }
                placeholder='Enter top caption'
              />
              <TextInput style={ textInput }
                onChangeText={ (bottomText) => this.setState({ bottomText }) }
                placeholder='Enter bottom caption'
              />
            </View>
            <Button text="Submit Meme" onPress={ this.joinGame } />
          </View>
        </View>
      );
    }
}