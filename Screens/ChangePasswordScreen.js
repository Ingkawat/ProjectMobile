import React, { useState, useContext, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { Context as ValidationContext } from "../context/ValidationContext";
import axios from "axios";
import Constants from "expo-constants";
import { Alert } from "react-native";

const ChangePasswordScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [oldpassword, setOldPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [checkoldpassword, setCheckOldpassword] = useState("");
  const [iduser, setIdUser] = useState("");
  const { validate_Password } = useContext(ValidationContext);
  const [conpass, setConpass] = useState("");
  const { changepassword } = useContext(AuthContext);

  useEffect(() => {
    axios
      .post(
        `http://${Constants.expoConfig.extra.apiUrl}:3000/user/${state.username}`
      )
      .then(async (res) => {
        console.log(res.data);
        setIdUser(res.data._id);
        setCheckOldpassword(res.data.password)
        console.log(checkoldpassword)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const ButtonAlert = () =>
    Alert.alert("Alert", "Password Invalid", [
      {
        text: "OK",
      },
    ]);

  const ButtonAlert2 = () =>
    Alert.alert("Alert", "Password Not Match", [
      {
        text: "OK",
      },
    ]);
    const ButtonAlert3 = () =>
    Alert.alert("Alert", "Old Password Invalid", [
      {
        text: "OK",
      },
    ]);
    const ButtonAlert4 = () =>
    Alert.alert("Alert", "Your password has been update", [
      {
        text: "OK",
      },
    ]);
  const submit_changepass = () => {
    console.log(iduser)
    if (password == "" && oldpassword == "" && confirmpassword == "") {
      ButtonAlert();
    }
    else if(password != confirmpassword){
        ButtonAlert2();
    }
    else if(oldpassword === checkoldpassword){
        axios
        .post(
          `http://${Constants.expoConfig.extra.apiUrl}:3000/changepass/${iduser}`,{password:password}
        )
        .then(async (res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
        ButtonAlert4();
        navigation.navigate("CreateBill")
    }
    else {
        ButtonAlert3();
    }
  };

  return (
    <View style={styles.screen}>
      <View
        style={{ flexDirection: "row", marginBottom: 30, marginRight: -20 }}
      >
        <TextInput
          style={styles.txtInput}
          placeholder="Old Password"
          value={oldpassword}
          secureTextEntry={true}
          onChangeText={(value) => {
            setOldPassword(value);
          }}
        ></TextInput>
        
      </View>
      <View
        style={{ flexDirection: "row", marginBottom: 40, marginRight: -20 }}
      >
        <TextInput
          style={styles.txtInput}
          placeholder="New Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(value) => {
            setPassword(value), validate_Password(value);
          }}
        ></TextInput>
        
      </View>
      <View
        style={{ flexDirection: "row", marginBottom: 30, marginRight: -20 }}
      >
        <TextInput
          style={styles.txtInput}
          placeholder="Confirm Password"
          value={confirmpassword}
          secureTextEntry={true}
          onChangeText={(value) => {
            setConfirmPassword(value)
          }}
        ></TextInput>
        
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => submit_changepass()}>
        <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>
          Reset Password
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

export default ChangePasswordScreen;
