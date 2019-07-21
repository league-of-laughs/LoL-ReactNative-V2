import React from 'react';
import io from 'socket.io-client';
import { NativeRouter,Switch,Route } from 'react-router-native';

import StartPage from './pages/startPage';
import MemeRoom from './pages/memeRoom';
import VotingRoom from './pages/votingRoom';
import WinnerRoom from './pages/winnerRoom';

let SERVER_URL = "http://94451515.ngrok.io"; 

const socket = io.connect(SERVER_URL);

export default class App extends React.Component {

  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path ="/winner" render = {(routeProps) => <WinnerRoom {...routeProps} socket = {socket}/>} />
          <Route exact path = "/voting" render = {(routeProps) => <VotingRoom {...routeProps} socket = {socket}/>} />
          <Route exact path = "/meme" render = {(routeProps) => <MemeRoom {...routeProps} socket = {socket}/>} />
          <Route exact path = "/" render = {(routeProps) => <StartPage {...routeProps} socket = {socket}/>} />
        </Switch>
      </NativeRouter>
    );
  }
}