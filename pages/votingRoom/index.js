import React,{ Component } from 'react';
import { View, AsyncStorage } from 'react-native';

import CommonStyles from '../../styles/common';
import Button from '../../components/button/vote';
import Header from '../../components/headers/text';
import Waiting from '../../components/waiting';

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
        const{ socket } = this.props;

        let name = await AsyncStorage.getItem("name");
        const room =  await AsyncStorage.getItem('room');
        let data = {
            name,
            number
        }

        socket.emit('mobile-voteMeme',room, JSON.stringify(data));

        this.setState({waiting:true})
    }

    render(){
      const { waiting } = this.state;
      const { container, body } = CommonStyles;
      return(
        waiting ?
        <View style={ container }>
          <Header text = "Vote for a meme"/>
          <Waiting />
        </View>
        :
        <View style={ container }>
          <Header text = "Vote for a meme"/>
          <View style={ body }>
            <View style={{ marginBottom: 50 }}>
              <Button text="1" onPress={ this.vote(1) } />
            </View>
            <Button text="2" onPress={ this.vote(2) } />
          </View>
        </View>
      );
    }
}