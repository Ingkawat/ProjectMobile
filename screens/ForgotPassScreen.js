import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ForgotPassScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: "row", marginBottom: 60 }}>
        <Image
          source={require("../assets/password_icon.png")}
          style={styles.icon}
        ></Image>
        <TextInput
          style={styles.txtInput}
          placeholder="New password"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 60 }}>
        <Image
          source={require("../assets/password_icon.png")}
          style={styles.icon}
        ></Image>
        <TextInput
          style={styles.txtInput}
          placeholder="Confirm new password"
        ></TextInput>
      </View>
      <View
        style={{ flexDirection: "row", marginBottom: 60, marginRight: -20 }}
      >
        <TextInput style={styles.txtInput} placeholder="Email"></TextInput>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "#FFF8EF" }}>Reset Password</Text>
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

  icon: {
    width: 35,
    height: 35,
    marginRight: 2,
    marginLeft: -10,
  },

  txtInput: {
    height: 25,
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },

  btn: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 50,
    backgroundColor: "#525EBC",
  },
});

export default ForgotPassScreen;
