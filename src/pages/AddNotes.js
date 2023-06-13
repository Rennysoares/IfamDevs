import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function AddNotes({navigation}) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function ButtonLeft(){
    return(
      <TouchableOpacity
            onPress={()=>{navigation.goBack()}}>
            <Image
              source={require('../../assets/setanavigator.png')}
              style={{
                height: 20,
                width: 20,
                marginHorizontal: 16,
            }}
            />
        </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <ButtonLeft/>
        <TextInput
          style={styles.titleInput}
          value={title}
          onChangeText={setTitle}
          maxLength={20}
          placeholder='Título'
      />
      </View>
      <View>
      <TextInput
        editable
        multiline
        numberOfLines={25}
        maxLength={1000}
        value={content}
        onChangeText={setContent}
        style={styles.contentInput}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleInput:{
    backgroundColor: 'rgb(255, 255, 255)',
    margin: 2,
    borderRadius: 5,
    padding: 7,
    width: 150
  },
  contentInput:{
    backgroundColor: 'rgb(255, 255, 255)',
    marginTop: 30,
    borderRadius: 5,
    padding: 5,
    textAlignVertical: 'top'
  },
  header:{
    backgroundColor: 'rgb(255, 255, 255)',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center'
  },
});