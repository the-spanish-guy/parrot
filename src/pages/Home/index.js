// require('react-native').unstable_enableLogBox();
import React, { useState } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import { useTheme, Button } from "react-native-paper";
import Svg, { Path } from 'react-native-svg'

import parrot from '../../../assets/PARROT_.png'
import header from '../../../assets/header_png.png'


import styles from './styles';

export default function Home({ navigation }) {
  const { colors } = useTheme();
  
  function handleToTalk() {
    console.log('teste')
    navigation.navigate('Talk')
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
        <View style={{ height: 300, borderWidth:1, backgroundColor: colors.background }}>
        {/* <Svg
          height="100%"
          width="100%"
          viewBox="0 0 1347 789.625"
          style={{ position: 'absolute', top: -10}}
        >
          <Path
            fill="#F94851"
            d="M-1320,862.484s260.386,107.689,560.833-197.429S27,499.035,27,499.035V91.3H-1320Z" transform="translate(1320 -91.299)"
          />
        </Svg> */}
        <Image source={header} style={{ width: "100%", height: "60%", resizeMode: "stretch" }}/>
      </View>

        <View style={[styles.content, {backgroundColor: colors.background}]} >
          
          <View style={styles.img_container}>
            <Image
              source={parrot}
              style={styles.img}
            />
          </View>
          <Button mode="contained" style={styles.btn} labelStyle={{fontWeight: "bold"}} onPress={handleToTalk}>
          Talk with Parrot
          </Button>

          <View style={styles.content_text}>
            <Text style={styles.bracket}>&#123;</Text>
            
            <View style={styles.content_texts}>
              <Text style={[styles.bracket_txt, { color: colors.txt } ]}>keep writing and he will</Text>
              <Text style={[styles.bracket_txt, { color: colors.txt } ]}>keep repeating</Text>
            </View>

            <Text style={styles.bracket}>&#125;</Text>
          </View>

        </View>

    </View>
  );
}
