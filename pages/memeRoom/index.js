import React,{Component} from 'react';
import {View,TextInput,Button,Text,AsyncStorage} from 'react-native';

import style from './style';

export default class memeRoom extends Component{
    constructor(props){
        super(props);
        this.state = {
            topText:null,
            bottomText:null,
            waiting: false
        }
        const {socket} = this.props;

        socket.on('mobile-startVoting',() => {
            this.props.history.push('/voting')
        })
    }


    componentDidMount(){
        console.log('entered meme room')
    }

    sendMeme = async () => {
        const {socket} = this.props;
        let name = await AsyncStorage.getItem("name");
        console.log(name);
        let {topText,bottomText} = this.state;

        let data = {
            name,
            topText,
            bottomText
        }

        socket.emit('mobile-uploadMeme',JSON.stringify(data));
        this.setState({waiting:true})
    }
    render(){
        if(this.state.waiting)
            return(
                <View style={style.container}>
                    <Text>Waiting for other players</Text>
                </View>
            )
        return(
            <View style={style.container}>
                <Text>Fill out Meme</Text>
                <TextInput 
                value={this.state.text}
                onChangeText ={(topText) => this.setState({topText})}
                />
                <TextInput 
                value={this.state.text}
                onChangeText ={(bottomText) => this.setState({bottomText})}
                />
                <Button 
                title="Submit Meme"
                onPress = {this.sendMeme}
                />
            </View>
        )
    }
}