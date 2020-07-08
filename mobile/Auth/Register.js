import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { Button } from 'native-base';

export default class Register extends Component {
  // const [email, onChangeMail] = React.useState();
  // const [password, onChangePass] = React.useState();
  // const [fullName, onChangefullName] = React.useState();
  // const [gender, onChangeGender] = React.useState();
  // const [phone, onChangePhone] = React.useState();
  // const [address, onChangeAddress] = React.useState();
  
  render(){
  return (
      <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./../assets/icon/dumbsound.png')}
      />
      <Text style={{color:'#FFFFFF', marginBottom:20, marginTop:40, fontSize:15}}>Login Member</Text>
        <TextInput
        style={styles.inputan}
        // onChangeText={text => onChangeMail(text)}
        // value={email}
        placeholder={"Email"}
      />
      <TextInput
        style={styles.inputan}
        // onChangeText={text => onChangePass(text)}
        // value={password}
        placeholder={"Password"}
      />
      <TextInput
        style={styles.inputan}
        // onChangeText={text => onChangefullName(text)}
        // value={fullName}
        placeholder={"Full Name"}
      />
      <TextInput
        style={styles.inputan}
        // onChangeText={text => onChangeGender(text)}
        // value={gender}
        placeholder={"Gender"}
      />
      <TextInput
        style={styles.inputan}
        // onChangeText={text => onChangePhone(text)}
        // value={phone}
        placeholder={"Phone"}
      />
      <TextInput
        style={styles.inputan}
        // onChangeText={text => onChangeAddress(text)}
        // value={address}
        placeholder={"Address"}
      />
      <TouchableOpacity
        style={styles.btn}
          onPress={() => this.props.navigation.navigate("screenHome")}
        >
        <Text style={styles.tombol}>Register</Text>
      </TouchableOpacity>
      <Button transparent onPress={() => this.props.navigation.navigate("Login")}>
         <Text style={{fontSize: 12}}>
              <Text style={{color: 'white'}}>Already an have a account ?</Text>
              <Text style={{color: '#B1B1B1'}}> click here</Text>
          </Text>
      </Button>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputan : {
    backgroundColor: 'rgba(210, 210, 210, 0.25)',
    borderRadius:20,
    width:350,
    margin:5,
    padding:7,
    color:'#FFFFFF'
  },

  tombol : {
    backgroundColor:'#F58033',
    borderRadius:20,
    textAlign:'center',
    width:350,
    fontSize:18,
    fontWeight:'bold',
    marginTop:20,
    padding:8,
    color:'#FFFFFF'
  }
});

