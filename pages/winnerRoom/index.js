import React,{Component} from 'react';
import {View,Text} from 'react-native';

import styles from './style';

export default class WinnerRoom extends Component{
    constructor(props){
        super(props);

        const{socket} = this.props;

        socket.on('restart',() => {
            this.props.history.push('/');
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Winner!</Text>
            </View>
        )
    }
}