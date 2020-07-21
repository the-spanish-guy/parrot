// require('react-native').unstable_enableLogBox();
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  Keyboard
} from 'react-native';
import { AppLoading } from 'expo';
import * as speech from 'expo-speech'
import Lottie from 'lottie-react-native'
import { useTheme } from "react-native-paper";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";

import parrot from '../../../assets/PARROT_.png'
import parrot_animation from '../../../assets/parrot.json'

import styles from './styles';

export default function Talk() {
  let [ fontLoaded ] = useFonts({Roboto_700Bold});
  const { colors } = useTheme();
  const [text, setText] = useState('');
  const [gif, setGif] = useState(false)

  function speak() {
    Keyboard.dismiss();
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
  const HandleParrotAnimaiton = (function() {
    if(gif) {
      return (
        <Lottie resizeMode="contain" autoSize source={parrot_animation} autoPlay loop/>
      )
    }

    return (
      <View style={styles.img_container}>
        <Image
          source={parrot}
          style={styles.img}
        />
      </View>
    )
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }else{
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]} keyboardShouldPersistTaps='handled'>
      <HandleParrotAnimaiton/>
      
      <TextInput
        onChangeText={e => setText(e)}
        style={styles.txt}
        placeholder="Instert your text"
        value={text}
      />

      <View style={styles.tst}>
        <TouchableOpacity
          onPress={speak}
          style={styles.btn}
        >
          <Text style={{color: '#FFFFFF', fontFamily: 'Roboto_700Bold'}}>Press to talk</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
}
