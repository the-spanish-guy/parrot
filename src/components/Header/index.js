import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

import styles from './styles'

export default function Header() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { borderStartColor: colors.background } ]}>
      {/* <View style={styles.content}></View> */}
    </View>
  )
}