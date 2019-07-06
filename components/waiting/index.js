import React from 'react';
import CommonStyles from '../../styles/common';
import { ActivityIndicator, View, Text } from 'react-native';

export default () => {
  return(
    <View style={ CommonStyles.body }>
      <Text style={ CommonStyles.waitingTextStyle}>Waiting for game to start</Text>
      <ActivityIndicator style={{ marginTop:40 }} size="large" color="#2A2A2E"/>
    </View>
  )
}