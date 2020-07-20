import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    flex:1,
    borderTopRightRadius: 120,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 40
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
  img_container: {
    width: 300,
    height: 200,
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
    color: 'white',
    fontSize: 18,
  },
});