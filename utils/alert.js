import { Alert } from 'react-native'

export default {
  roomAlert : () => Alert.alert(
    'Invalid Room code',
    'Enter valid room',
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  ),
  inputAlert: () => Alert.alert(
    'Invalid Input',
    'Please fill out all fields',
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  ),
};