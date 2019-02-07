import React,{Component} from 'react';
import {View,Button,AsyncStorage} from 'react-native';

import Style from './style'

export default class VotingRoom extends Component{
    constructor(props){
        super(props);
        this.state = {
            vote:null,
            waiting:false
        }
    }

    vote = async (number) => {
        const{socket} = this.props;

        let name = await AsyncStorage.getItem("name");

        let data = {
            name,
            number
        }

        socket.emit('mobile-voteMeme',data)

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
                label="1"
                onPress = {() => this.vote(1)}
                />
                <Button 
                label="2"
                onPress = {() => this.vote(2)}
                />
            </View>
        )
    }
}