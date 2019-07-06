import React from 'react';
import CommonStyles from '../../styles/common';
import Logo from '../../assets/logo.png'
import { View, Image, Text } from 'react-native';

export default (props) => {
  return(
    <View style={ CommonStyles.headerText }>
      <Image source={ Logo } style={ CommonStyles.logoText }/>
      <Text style={ CommonStyles.headerTextStyle } >{props.text}</Text>
    </View>
  )
}