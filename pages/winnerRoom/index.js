import React,{Component} from 'react';
import { View, Text } from 'react-native';

import CommonStyles from '../../styles/common';
import Button from '../../components/button';
import Header from '../../components/headers/start';

export default class WinnerRoom extends Component{
  constructor(props){
    super(props);

    this.state={
      winner: "Alex123"
    }

    const{ socket } = this.props;

    socket.on('restart',() => {
      this.props.history.push('/');
    })
  }

  reset = () => {
    const { history } = this.props;
    history.push('/');
  }

  render(){
    const { container, body, waitingTextStyle } = CommonStyles;
    const { winner } = this.state;
    return(
      <View style={ container }>
        <Header />
        <View style={ body }>
          <Text style = { waitingTextStyle }>Winner!</Text>
          <Text style = { waitingTextStyle }>{ winner }</Text>
          <Button text="Join new game" onPress={ this.reset } />
        </View>
      </View>
    );
  }
}