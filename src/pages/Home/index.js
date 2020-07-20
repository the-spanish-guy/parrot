// require('react-native').unstable_enableLogBox();
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
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
import { useTheme, Button } from "react-native-paper";


import styles from './styles';

export default function Home({ navigation }) {
  const { colors } = useTheme();
  const [text, setText] = useState('');
  const [gif, setGif] = useState(false);

  const openBracket = '{';
  const closeBracket = '}';
  const novoteste = 'keep writing and he will\nkeep repeating';

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
  
  function handleToTalk() {
    console.log('teste')
    navigation.navigate('Talk')
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

  const Reseta= () => {
    return(
      <>
        <View style={{alignItems: "center", width: '63.1%'}}>
          <Text style={{color: 'purple', fontSize: 18,}}>keep writing and he will</Text>
          <Text style={{color: 'white', fontSize: 18}}>keep repeating</Text>
        </View>
      </>
    )
  }

  return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      <View style={{height: 120, backgroundColor: '#F94851', borderBottomLeftRadius: 80}}/>
      
      <View style={{flex:1}}>
        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: '#F94851'}} />

        <View style={[styles.content, {backgroundColor: '#000C1E'}]} >
          <HandleParrotAnimaiton/>
          <Button mode="contained" style={styles.btn} labelStyle={{fontWeight: "bold"}} onPress={handleToTalk}>
          Talk with Parrot
          </Button>

          <View style={styles.content_text}>
            <Text style={styles.bracket}>&#123;</Text>
            
            <View style={styles.content_texts}>
              <Text style={styles.bracket_txt}>keep writing and he will</Text>
              <Text style={styles.bracket_txt}>keep repeating</Text>
            </View>

            <Text style={styles.bracket}>&#125;</Text>
          </View>

        </View>


      </View>
    </View>
  );
}
