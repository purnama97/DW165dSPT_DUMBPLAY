import React, {Component} from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Login from './Auth/Login';
import Register from './Auth/Register';

import Home from './src/screen/Home'
import Profil from './src/screen/Profil'
import Music from './src/screen/Music'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

class NavHome extends Component {
  render(){
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor:'#1F1F1F' }}
      style={{ backgroundColor: '#000000' }}
      tabBarOptions={{
        activeTintColor: '#EE4622',
        inactiveTintColor: '#F58033',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          //tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}  />
        <Tab.Screen
          name="Music"
          component={Music}
          options={{
            //tabBarLabel: 'Music',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="music" color={color} size={size} />
            ),
        }} />
        <Tab.Screen
          name="Profil"
          component={Profil}
          options={{
            //tabBarLabel: 'Music',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
        }} />
    </Tab.Navigator>
  );
  }
}

class App extends Component{
  render(){
    return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Home" component={HomeScreen} />
      //     <Stack.Screen name="Login" component={Login} />
      //     <Stack.Screen name="Register" component={Register} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      
      <>
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen name="screenHome" component={NavHome} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Register" component={Register} />
        </Drawer.Navigator>
        </NavigationContainer>     
      </>
    );
  }
}

export default App;