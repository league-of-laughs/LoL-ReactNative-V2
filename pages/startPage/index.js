import React,{Component} from 'react';
import {View,TextInput,Text,TouchableOpacity,AsyncStorage,Image,ActivityIndicator} from 'react-native';

import Styles from './style';

export default class startPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            waiting: false
        }
        const {socket} = this.props
        
        socket.on('mobile-start',(meme) => {
            AsyncStorage.setItem('meme',meme);
            this.props.history.push('/meme')
        })
    
    }

    joinGame = () => {
        const {socket} = this.props 
        console.log('sending name')
        AsyncStorage.setItem("name",this.state.name)
        socket.emit('mobile-addPlayer',this.state.name);
        this.setState({waiting:true});
        console.log('test');
        
      }
    

    render(){
        if(this.state.waiting)
            return(
                <View style = {Styles.container}>
                    <Text style={Styles.textStyle}>Waiting for game to start</Text>
                    <ActivityIndicator style={{marginTop:40}} size="large" color="#0000ff"/>
                </View>
            )
        else
        return(
            <View style = {Styles.container}>
            <View style={Styles.header}>
                <Image style = {Styles.logo} source={require('../../assets/logo.png')}/>
                <Text style={Styles.title}>League of Memes</Text>
            </View>
                <Text style={Styles.textStyle}>Enter Name</Text>
                <TextInput 
                onChangeText = {(name) => this.setState({name})}
                value = {this.state.text}
                style = {Styles.textInput}
                />
                <TouchableOpacity
                onPress={this.joinGame}
                style={Styles.button}
                >
                    <Text style={Styles.textStyle}>Join Game</Text>
                </TouchableOpacity>
            </View>
        )
    }
}