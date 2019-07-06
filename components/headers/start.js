import React from 'react';
import CommonStyles from '../../styles/common';
import Logo from '../../assets/logo.png'
import { View, Image } from 'react-native';

export default () => {
  return(
    <View style={ CommonStyles.header }>
      <Image source={ Logo } style={ CommonStyles.logo }/>
    </View>
  )
}