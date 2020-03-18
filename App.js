import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import * as speech from 'expo-speech'

var parrot = require('./assets/parrot.png')

export default function App() {
  const [text, setText] = useState('eu te amo muito coisinha chata e dramática');

  function speak() {
    speech.speak(text, {
      language: 'pt-BR'
    })
  }

  return (
    <View style={styles.container}>
      <Text>talk more than my girlfriend</Text>
      <Image
        source={parrot}
        style={styles.img}
      />
      <TextInput
        onChangeText={e => setText(e)}
        style={styles.txt}
        placeholder="Insira seu texto"
      />
      {/* <TouchableOpacity
        title="asasa" 
        onPress={speak}
        style={styles.btn}
      >
        <Text style={styles.btn_txt}>Aperte para falar</Text>
      </TouchableOpacity> */}

      <View style={styles.tst}>
        <Button title="Aperte para falar" color="#f94851"/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "transparent",
    padding: 10,
    backgroundColor: "#fff",
    margin: 10,
    color: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },
  img: {
    width: 200,
    height: 200
  },
  tst: {
    width: "auto"
  }
});
