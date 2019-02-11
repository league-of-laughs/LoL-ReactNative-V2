import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';

import styles from './style';

export default class WinnerRoom extends Component{
    constructor(props){
        super(props);

        this.state={
            winner: "Alex123"
        }

        const{socket} = this.props;

        socket.on('restart',() => {
            this.props.history.push('/');
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Congratulations!</Text>
                <Text style={styles.name}>{this.state.winner}</Text>
                <Image 
                style = {styles.logo}
                source={require('../../assets/logo.png')}
                />
                <Text style={styles.footer}>You are the MemeLord!</Text>
            </View>
        )
    }
}