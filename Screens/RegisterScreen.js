import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const RegisterScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.circle}>
        <Image
          source={require("../assets/add_picture.png")}
          style={styles.imgAdd}
        ></Image>
      </View>
      <Text style={{ color: "#F06B6D", fontWeight: "bold", marginTop: 10 }}>
        Add Photo
      </Text>
      <TextInput
        style={styles.txtInput}
        placeholder="Enter Your Name"
      ></TextInput>
      <TextInput
        style={styles.txtInput}
        placeholder="Enter User Name"
      ></TextInput>
      <TextInput
        style={styles.txtInput}
        placeholder="Enter Password"
      ></TextInput>
      <TextInput
        style={styles.txtInput}
        placeholder="Confirm Password"
      ></TextInput>
      <TextInput style={styles.txtInput} placeholder="Enter Email"></TextInput>
      <TextInput
        style={styles.txtInput}
        placeholder="Enter Phonenumber"
      ></TextInput>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8EF",
  },

  circle: {
    backgroundColor: "#FCC046",
    borderRadius: 100,
    padding: 30,
  },

  imgAdd: {
    width: 130,
    height: 130,
    marginLeft: -5,
  },

  txtInput: {
    height: 25,
    width: "60%",
    marginTop: 25,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },

  btn: {
    backgroundColor: "#F06B6D",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 25,
  },
});

export default RegisterScreen;
