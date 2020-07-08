import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { Button } from 'native-base';

const User = '{"fullName":"Ipur Purnama","email":"ipur.purnama351@gmail.com","status":"1","gender":"Male","phone":"082115784351","address":"Kp. Sinarjaya 001/004 Kel.Urug Kec. Kawalu Kota Tasikmalaya 46182"}'
const data = JSON.parse(User);
export default class Profil extends Component {
  render(){
  return (
      <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../../assets/avatar.png')}
      />
      <Text style={{color:'#FFFFFF', marginBottom:10, marginTop:30, fontSize:15}}>User</Text>
      <Text style={styles.label}> Full Name</Text>
      <Text style={styles.teks}> {data.fullName}</Text>
      <Text style={styles.label}> Email</Text>
      <Text style={styles.teks}> {data.email }</Text>
      <Text style={styles.label}> Status</Text>
      <Text style={styles.teks}> {data.subscribe === "1" ? "Active":"Not Active" }</Text>
      <Text style={styles.label}> Gender </Text>
      <Text style={styles.teks}> {data.gender }</Text>
      <Text style={styles.label}> Phone </Text>
      <Text style={styles.teks}> {data.phone }</Text>
      <Text style={styles.label}> Address </Text>
      <Text style={styles.teks}> {data.address }</Text>
      
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

  label : {
    color:'#FFFFFF',
    fontWeight:'bold',
    textAlign:'left',
    width:350,
    margin:5,
    paddingLeft:7,
  },

  teks : {
    color:'#8A8C90',
    textAlign:'left',
    width:350,
    paddingLeft:7,
  },

  avatar : {
    borderRadius:50,
    width:75,
    height:75,
  }
});

