import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    flex:1,
    alignItems: 'center',
    marginTop: -13,
    backgroundColor: 'transparent',
  },
  img_container: {
    width: 200,
    height: 100,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  btn: {
    width: "60%",
    borderRadius: 40,
    backgroundColor: '#F94851',
    marginTop: 20
  },
  content_text: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    bottom: 40,
  },
  content_texts: {
    alignItems: "center",
    width: '65%',
  },
  bracket: {
    color: '#F94851',
    fontSize: 60,
    margin: 4
  },
  bracket_txt: {
    fontSize: 18,
  },
});