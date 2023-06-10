import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons, Ionicons} from '@expo/vector-icons'
import * as SecureStore from 'expo-secure-store';

import Home from './pages/Home';
import Notes from './pages/Notes';
import AddNotes from './pages/AddNotes';
import Content from './pages/Content';
import Settings from './pages/Settings';
import Welcome from './components/Welcome';

import ButtonPlus from './components/ButtonPlus';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NameInsert from './components/NameInsert';
import AgeInsert from './components/AgeInsert';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

function RouteWelcome({ navigation }){
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Welcome" component={Welcome} options={{
          headerShown: false
        }}/>
      <Stack.Screen name="WelcomeName" component={NameInsert} options={{
          headerShown: false
        }}/>
      <Stack.Screen name="WelcomeAge" component={AgeInsert} options={{
          headerShown: false
        }}/>
    </Stack.Navigator>
  )
}

export default function MyTabs() {

  return (
    <Tab.Navigator
    initialRouteName='RouteWelcome'
      screenOptions={{
        tabBarStyle:{
          backgroundColor: '#222',
          height: 60
        },
        headerShown: false,
        tabBarActiveTintColor: '#FFF',
        tabBarItemStyle:{
          paddingBottom: 5
        }
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon:({size, color})=>(
            <Entypo name='home' size={size} color={color}/>
          )
        }}
      >
        {({navigation}) => <Home navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{
          tabBarIcon:({size, color})=>(
            <MaterialIcons name='notes' size={size} color={color}/>
          )
        }}
      />
      <Tab.Screen
       name="AddNotes"
       component={AddNotes}
       options={{
        tabBarLabel: " ",
        tabBarIcon:({size, color})=>(
          <ButtonPlus size={size} color={color}/>
        )
      }}
      />
      <Tab.Screen
        name="Content"
        component={Content}
        options={{
          tabBarIcon:({focused, size, color})=>(
            <Entypo name='book' focused={focused} size={size} color={color}/>
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon:({size, color})=>(
            <Ionicons name='settings-sharp' size={size} color={color}/>
          )
        }}
      />
      <Tab.Screen
        name="RouteWelcome"
        component={RouteWelcome}
        options={{
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' }
        }}
      />
        
    </Tab.Navigator>
  );
}