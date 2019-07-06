import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import CommonSyles from '../../styles/common';

export default (props) => {
  return(
    <TouchableOpacity 
    style={ CommonSyles.button }
    onPress={ props.onPress }
    >
      <Text style = { CommonSyles.textStyle }>{ props.text }</Text>
    </TouchableOpacity>
  )
}