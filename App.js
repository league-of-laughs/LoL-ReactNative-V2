import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client';
import {NativeRouter,Switch,Route} from 'react-router-native';

import StartPage from './pages/startPage';
import MemeRoom from './pages/memeRoom';
import VotingRoom from './pages/votingRoom';

let SERVER_URL = "http://0693b362.ngrok.io";
const socket = io.connect(SERVER_URL);


export default class App extends React.Component {

  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path = "/voting" render = {(routeProps) => <VotingRoom {...routeProps}/>} />
          <Route exact path = "/meme" render = {(routeProps) => <MemeRoom {...routeProps} socket = {socket}/>} />
          <Route exact path = "/" render = {(routeProps) => <StartPage {...routeProps} socket = {socket}/>} />
        </Switch>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
