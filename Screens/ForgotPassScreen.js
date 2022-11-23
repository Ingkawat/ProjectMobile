import React, { useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { Alert } from "react-native";

const ForgotPassScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);
  const { forgotpass, repassword } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [token, setResetCode] = useState("");

  const handleCheckEmail = (text) => {
    let txt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmail(text);

    if (txt.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const handleCheckPassword = (text) => {
    let txt =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#@_=;:()*"':{}[%\$%\^&\*])(?=.{8,})/;
    setPassword(text);

    if (txt.test(text)) {
      setCheckValidPassword(false);
    } else {
      setCheckValidPassword(true);
    }
  };

  const ButtonAlert = () =>
    Alert.alert(
      "Alert",
      "Please check your inbox of mail",
      [
        {
          text: "OK",
        },
      ],
    );

  const ButtonAlert2 = () =>
    Alert.alert(
      "Alert",
      "Error sending email. Try again!",
      [
        {
          text: "OK",
        },
      ],
      setEmail("")
    );

  const ButtonAlert3 = () =>
    Alert.alert("Alert", "Now. You can login with new password", [
      {
        text: "OK",
      },
    ]);

  const ButtonAlert4 = () =>
    Alert.alert("Alert", "New Password or Password Reset Code Invalid", [
      {
        text: "OK",
      },
    ]);

  const submit_forgotpass = () => {
    if (!checkValidEmail && email != "") {
      forgotpass({ email });
      ButtonAlert();
      setVisible(true);
    } else {
      ButtonAlert2();
    }
  };

  const handlePasswordReset = () => {
    let tokenLength = token.length
    if (!checkValidPassword && tokenLength == 5 && token != "") {
      repassword({ email, password, token });
      ButtonAlert3();
      navigation.navigate('Login');
    } else {
      ButtonAlert4();
    }
  };

  return (
    <View style={styles.screen}>
      <View
        style={{ flexDirection: "row", marginBottom: 60, marginRight: -20 }}
      >
        <TextInput
          style={styles.txtInput}
          keyboardType="email-address"
          placeholder="Email"
          value={email}
          onChangeText={(text) => handleCheckEmail(text)}
        ></TextInput>
      </View>
      {checkValidEmail ? (
        <Text style={styles.textfail}>Is not e-mail rules.</Text>
      ) : (
        <Text style={styles.textfail}></Text>
      )}

      {visible && (
        <>
          <TextInput
            style={styles.txtInput}
            placeholder="New Password"
            value={password}
            secureTextEntry={true}
            onChangeText={(value) => {
              handleCheckPassword(value);
            }}
          ></TextInput>
          {checkValidPassword ? (
            <Text style={styles.textfail2}>
              Password must have a large, small, special, {"\n"} and must have 8
              characters.
            </Text>
          ) : (
            <Text style={styles.textfail2}></Text>
          )}
          <TextInput
            style={styles.txtInput2}
            placeholder="Password Reset Code"
            maxLength={5}
            onChangeText={(value) => {
              setResetCode(value);
            }}
          ></TextInput>
        </>
      )}

      <TouchableOpacity
        style={styles.btn}
        onPress={visible ? handlePasswordReset : submit_forgotpass}
      >
        <Text style={{ color: "#FFF8EF" }}>
          {visible ? "Reset Password" : "Request Reset Code"}
        </Text>
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
    width: "60%",
    marginTop: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },

  txtInput2: {
    height: 25,
    width: "60%",
    marginTop: 30,
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

  textfail: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    marginLeft: 150,
    marginTop: -50,
  },

  textfail2: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default ForgotPassScreen;
