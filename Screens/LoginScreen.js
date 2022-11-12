import React, { useState, useContext, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  SafeAreaView
} from "react-native";
import * as Animatable from "react-native-animatable";
import Constants from 'expo-constants';



import { Context as AuthContext } from "../context/AuthContext";
import { Context as ValidationContext } from "../context/ValidationContext";

const LoginScreen = ({ navigation }) => {
  const { state, login, tryLocalSignin } = useContext(AuthContext);

  const { validate_Username, validate_Password } =
    useContext(ValidationContext);

  let state1 = useContext(ValidationContext).state;

  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    tryLocalSignin();
  }, []);

  const Check_onsubmit = () => {
    if (state1.errorUsername != "" && state1.errorPassword == "") {
      Alert.alert("Username requirement is invalid.");
    } else if (state1.errorPassword != "" && state1.errorUsername == "") {
      Alert.alert("Password requirement is invalid.");
    } else if (state1.errorUsername == "=" && state1.errorPassword == "") {
      Alert.alert("Username and Password requirement is invalid.");
    } else {
      login({ user_name, password });
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
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
          placeholder="Username"
          keyboardType="default"
          value={user_name}
          onChangeText={(value) => {
            setUser_name(value), validate_Username(value);
          }}
        ></TextInput>
      </View>
      {state1.errorUsername ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={{ color: "red" }}>{state1.errorUsername}</Text>
        </Animatable.View>
      ) : null}

      <View style={{ flexDirection: "row"}}>
        <Image
          source={require("../assets/password_icon.png")}
          style={styles.icon}
        ></Image>
        <TextInput
          style={styles.txtInput}
          placeholder="Password"
          keyboardType="default"
          value={password}
          onChangeText={(value) => {
            setPassword(value), validate_Password(value);
          }}
        ></TextInput>
      </View>
      {state1.errorPassword ? (
        <Animatable.View
          animation="fadeInLeft"
          duration={500}
          style={{ flexWrap: "nowrap", marginLeft: "5%", marginRight: "2%" }}
        >
          <Text style={{ color: "red", left: 25 }}>{state1.errorPassword}</Text>
        </Animatable.View>
      ) : null}
      
      {state.errorMessage ? (
        <Animatable.View
          animation="fadeInLeft"
          duration={500}
          style={{ flexWrap: "nowrap" }}
        >
          <Text style={{ color: "red" }}>{state.errorMessage}</Text>
        </Animatable.View>
      ) : null}

      <TouchableOpacity
        style={{ marginLeft: 150, marginBottom: 20 }}
        onPress={() => navigation.navigate("ForgotPass")}
      >
        <Text>Forgot Password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => Check_onsubmit()}>
        <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>

      <Text>
        Don't have account?{" "}
        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#5A6199",
            marginBottom: -3,
          }}
          onPress={() => navigation.navigate("Register")}
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
    </SafeAreaView>
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
