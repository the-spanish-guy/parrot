// require('react-native').unstable_enableLogBox();
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import * as speech from 'expo-speech'
import Lottie from 'lottie-react-native'

import parrot from '../../../assets/PARROT_.png'
// import parrot_animation from '../../../assets/parrot.gif'
import parrot_animation from '../../../assets/parrot.json'
import { useTheme } from "react-native-paper";


import styles from './styles';

export default function Talk() {
  const { colors } = useTheme();
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
  return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      <View style={{height: 120, backgroundColor: '#F94851', borderBottomLeftRadius: 80}}/>
      
      <View style={{flex:1}}>
        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: '#F94851'}} />

        <View style={[styles.content, {backgroundColor: '#000C1E'}]} >
        <HandleParrotAnimaiton/>
          <TextInput
            onChangeText={e => setText(e)}
            style={styles.txt}
            placeholder="Insira seu texto"
            value={text}
          />

          <View style={styles.tst}>
            <TouchableOpacity
              onPress={speak}
              style={[styles.btn, { backgroundColor: colors.button } ]}
            >
                <Text style={{color: '#FFFFFF'}}>Aperte para falar</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  );
}
