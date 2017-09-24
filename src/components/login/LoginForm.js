import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#efefef"
          barStyle="dark-content"
        />
        <TextInput 
          underlineColorAndroid="transparent"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          placeholder='username' 
          style={styles.input}/>
        <TextInput 
          underlineColorAndroid="transparent"
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          placeholder='password' 
          secureTextEntry 
          style={styles.input}/>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    padding: 40

  },
  input:{
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.21)',
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#efefef'
  },
  buttonContainer:{
    backgroundColor: '#4CAF50',
    paddingVertical: 16
  },
  buttonText:{
    textAlign: 'center',
    color: '#ffffff'
  }
	
});
