import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Banner from '../components/banner'
import MusicList from '../components/MusicList'

class Home extends Component {
    render(){
        return (
            <View style={styles.container}>
                <MusicList />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor:'#1F1F1F',
    alignItems: 'center'
  }
}) 

export default Home;