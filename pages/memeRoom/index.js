import React,{Component} from 'react';
import {View,TextInput,Button,Text,AsyncStorage,TouchableOpacity,Image,ActivityIndicator} from 'react-native';

import style from './style';

export default class memeRoom extends Component{
    constructor(props){
        super(props);
        this.state = {
            topText:null,
            bottomText:null,
            waiting: false,
            topHeight: 40,
            bottomHeight: 40
        }
        const {socket} = this.props;

        socket.on('mobile-startVoting',() => {
            this.props.history.push('/voting')
        })
    }

    updateSizeTop = (topHeight) => {
        this.setState({
          topHeight
        });
      }

    updateSizeBottom = (bottomHeight) => {
    this.setState({
        bottomHeight
    });
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
        let {topHeight,bottomHeight} = this.state

      
        if(this.state.waiting)
            return(
                <View style={style.container}>
                    <Text style={style.textStyle}>Waiting for other players</Text>
                    <ActivityIndicator style={{marginTop:40}} size="large" color="#0000ff"/>
                </View>
            )
        return(
            <View style={style.container}>
                <Text style={style.header}>Fill out the Meme from</Text>
                <Text style={style.headerBottom}>the screen</Text>
                <TextInput 
                placeholder="Top Caption"
                value={this.state.text}
                onChangeText ={(topText) => this.setState({topText})}
                style={style.textInput}
                returnKeyType={"done"}
                />
                <TextInput 
                placeholder="Bottom Caption"
                value={this.state.text}
                onChangeText ={(bottomText) => this.setState({bottomText})}
                style={style.textInput}
                returnKeyType={"done"}
                />
                <TouchableOpacity 
                style={style.button}
                onPress = {this.sendMeme}
                >
                    <Text style={style.textStyle}>Submit Meme</Text>
                </TouchableOpacity>
            </View>
        )
    }
}