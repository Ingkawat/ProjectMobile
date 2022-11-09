import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text
        style={{
          fontSize: 50,
          fontWeight: "bold",
          color: "#5A6199",
          marginBottom: 50,
        }}
      >
        WELCOME !
      </Text>
      <View style={{ flexDirection: "row", marginBottom: 45 }}>
        <Image
          source={require("../assets/user.png")}
          style={styles.icon}
        ></Image>
        <TextInput
          style={styles.txtInput}
          placeholder="username"
          keyboardType="default"
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/password_icon.png")}
          style={styles.icon}
        ></Image>
        <TextInput
          style={styles.txtInput}
          placeholder="password"
          keyboardType="default"
        ></TextInput>
      </View>
      <TouchableOpacity
        style={{ marginLeft: 150, marginBottom: 20 }}
        onPress={() => {
          navigation.navigate("forgotpass");
        }}
      >
        <Text>Forgot Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("createBill");
        }}
      >
        <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>
      <Text>
        Don't have account?{"  "}
        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#5A6199",
          }}
          onPress={() => {
            navigation.navigate("register");
          }}
        >
          <Text
            style={{
              color: "#5A6199",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </Text>
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
    width: 50,
    height: 50,
    marginRight: 2,
    marginLeft: -10,
  },

  txtInput: {
    height: 25,
    width: "60%",
    marginTop: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },

  btn: {
    backgroundColor: "#F06B6D",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default LoginScreen;
