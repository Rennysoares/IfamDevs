import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function Home({navigation}) {
  const [myname, setName] = useState('')

  function navegar(){
    navigation.navigate('RouteWelcome')
  }
  useEffect(() => {
    const checkUserData = async () => {
      // Verificar se os dados já foram preenchidos anteriormente
      const name = await SecureStore.getItemAsync('name')
      if (!name) {
        navegar()
        console.log('???')
      } else {
        setName(name)
      }
    };
    checkUserData();
  }, []);

  useEffect(() => {
    const focused = navigation.addListener('focus', () => {
      const checkUserData = async () => {
        const name = await SecureStore.getItemAsync('name')
          setName(name)
      };
      checkUserData();
    });
    focused;
  }, [navigation]);
  
  return (
    <View style={styles.container}>
      <Text>Bem vindo,{myname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});