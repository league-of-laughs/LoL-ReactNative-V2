import React,{ Component } from 'react';
import { View, AsyncStorage } from 'react-native';

import CommonStyles from '../../styles/common';
import Button from '../../components/button/vote';
import Header from '../../components/headers/text';

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
      const { waiting } = this.state;
      const { container, body, inputs, textInput } = CommonStyles;
      return(
        waiting ?
        <View style={ container }>
          <Header text = "Vote"/>
          <Waiting />
        </View>
        :
        <View style={ container }>
          <Header text = "Vote"/>
          <View style={ body }>
            <Button text="1" onPress={ this.joinGame } />
            <Button text="2" onPress={ this.joinGame } />
          </View>
        </View>
      );
    }
}