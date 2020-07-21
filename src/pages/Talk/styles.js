import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
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
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  img_container: {
    width: 300,
    height: 200,
    // marginTop: Constants.statusBarHeight + 40,
    alignItems: "center",
  },
  img: {
    width: "80%",
    height: "100%",
    resizeMode: "contain"
  },
  tst: {
    width: "40%",
  },
  btn: {
    borderRadius: 12,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#F94851',
    marginTop: 20,
  }
});