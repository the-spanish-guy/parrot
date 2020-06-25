import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Image
} from 'react-native';
import * as speech from 'expo-speech'
// import Lottie from 'lottie-react-native'

import parrot from './assets/parrot.png'
import parrot_animation from './assets/parrot.gif'
// import parrot_animation from './assets/parrot.json'

export default function App() {
  const [text, setText] = useState('');
  const [gif, setGif] = useState(false)

  function speak() {
    speech.speak(text + 'uruu uruu', {
      language: 'pt-BR',
      onStart: () => setGif(true),
      onDone: () => reset()
    })
  }

  function reset() {
    setGif(false)
    setText('')
  }
  // if (gif) {
  //   return (
  //     <View style={styles.container}>
  //       <Lottie resizeMode="contain" autoSize source={parrot_animation} autoPlay loop/>
  //     </View>
  //   )
  // }
  return (
    <View style={styles.container}>
      <Image
        source={gif ? parrot_animation : parrot}
        style={styles.img}
      />

      <TextInput
        onChangeText={e => setText(e)}
        style={styles.txt}
        placeholder="Insira seu texto"
        value={text}
      />

      <View style={styles.tst}>
        <Button
          title="Aperte para falar"
          color="#f94851"
          onPress={speak} />
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
    width: "auto",
  }
});
