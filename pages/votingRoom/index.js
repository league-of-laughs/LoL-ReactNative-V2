import React,{Component} from 'react';
import {View,Button,AsyncStorage,Text,TouchableOpacity,ActivityIndicator} from 'react-native';

import Style from './style'

export default class VotingRoom extends Component{
    constructor(props){
        super(props);
        this.state = {
            vote:null,
            waiting:false
        }

        const {socket} = this.props;
        socket.on('mobile-startVoting',() => {
            this.setState({waiting:false});
        })

        socket.on('gameWinner',(data) => {
            this.props.history.push('/winner')
        })
    }

    vote = async (number) => {
        const{socket} = this.props;

        let name = await AsyncStorage.getItem("name");

        let data = {
            name,
            number
        }

        socket.emit('mobile-voteMeme',JSON.stringify(data));

        this.setState({waiting:true})
    }

    render(){
        if(this.state.waiting)
            return(
                <View style={Style.container}>
                    <Text style={Style.textStyle}>Waiting for other players</Text>
                    <ActivityIndicator style={{marginTop:40}} size="large" color="#0000ff"/>
                </View>
            )
        return(
            <View style={Style.container}>
            <Text style={Style.header}>Vote</Text>
            <View style={Style.buttonContainer}>
                <TouchableOpacity 
                onPress = {() => this.vote(1)}
                style={Style.button}
                >
                    <Text style={Style.buttonTextStyle}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress = {() => this.vote(2)}
                style={Style.button}
                >
                    <Text style={Style.buttonTextStyle}>2</Text>
                </TouchableOpacity>
            </View>
            
                
            </View>
        )
    }
}