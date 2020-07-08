import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Login extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Ini adalah halaman Login</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default Login;
