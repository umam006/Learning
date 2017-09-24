import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import LoginForm from './LoginForm'

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.titleContainer}>
          <Image style={styles.logo} source={require('../../images/logo-uin.png')}/>
          <Text style={styles.titleText}> E-Learning </Text>
          <Text style={styles.titleText}> UIN Sunan Kalijaga </Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles=StyleSheet.create({
	container:{
		flex: 1,
    backgroundColor: '#ffffff'
	},
  titleContainer:{
    paddingTop: 40,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 10
  },
  titleText:{
    color: '#000000'
  },
  formContainer:{
    marginBottom: 100
  },
  logo:{
    marginBottom: 13,
    height: 120,
    width: 100
  }
});
