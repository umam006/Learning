import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

export default class StatusBarComponent extends Component {
  render() {
    return (
       <View>
   <StatusBar
     backgroundColor="#ffffff"
     barStyle="dark-content"
   />
 </View>
    );
  }
}
