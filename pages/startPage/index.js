import React,{Component} from 'react';
import {View,TextInput,Text,Button,AsyncStorage} from 'react-native';

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
                    <Text>Waiting for other PLayers</Text>
                </View>
            )
        else
        return(
            <View style = {Styles.container}>
                <Text>Enter Name</Text>
                <TextInput 
                onChangeText = {(name) => this.setState({name})}
                value = {this.state.text}
                style = {Styles.textInput}
                />
                <Button 
                title = "Join"
                onPress = {this.joinGame}
                />
            </View>
        )
    }
}