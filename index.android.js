/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './src/components/login/Login'
import StatusBarComponent from './src/components/statusbar/StatusBarComponent'

export default class Learning extends Component {
  render() {
    return (
      <Login/>
    );
  }
}

AppRegistry.registerComponent('Learning', () => Learning);
