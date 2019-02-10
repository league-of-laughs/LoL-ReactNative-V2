import React,{Component} from 'react';
import {View,Button,AsyncStorage,Text} from 'react-native';

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
                    <Text>Waiting for other players</Text>
                </View>
            )
        return(
            <View style={Style.container}>
                <Button 
                title="1"
                onPress = {() => this.vote(1)}
                />
                <Button 
                title="2"
                onPress = {() => this.vote(2)}
                />
            </View>
        )
    }
}