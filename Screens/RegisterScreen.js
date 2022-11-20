import React, { useState, useContext, useRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  SafeAreaView,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import * as ImagePicker from "expo-image-picker";

import { Context as AuthContext } from "../context/AuthContext";
import { Context as ValidationContext } from "../context/ValidationContext";

const RegisterScreen = ({ navigation }) => {
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();

  const { state, register } = useContext(AuthContext);
  const [user_name, setUser_name] = useState();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState();
  const {
    validate_Username,
    validate_Password,
    validate_Email,
    validate_Name,
    validate_Phonenumber,
  } = useContext(ValidationContext);

  const addimage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImage(result.uri);
  };

  let state1 = useContext(ValidationContext).state;

  const [conpass, setConpass] = useState("");

  const onSubmit_Register = () => {
    if (password != confirmpassword) {
      setConpass("password not match");
    } else if (
      state1.errorName === "" &&
      state1.errorEmail === "" &&
      state1.errorPassword === "" &&
      state1.errorPhonenumber === ""
    ) {
      if (
        user_name != "" &&
        name != "" &&
        password != "" &&
        email != "" &&
        phone != ""
      ) {
        register({ user_name, name, password, phone, email, image });
      } else {
        ButtonAlert2();
      }
    } else {
      ButtonAlert3();
    }
  };

  const ButtonAlert2 = () =>
    Alert.alert("Alert", "Please complete the information.", [
      {
        text: "OK",
      },
    ]);

  const ButtonAlert3 = () =>
    Alert.alert("Alert", "Please enter correct information.", [
      {
        text: "OK",
      },
    ]);

  return (
    // <View style={styles.screen}>

    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.screen}
    >
      <TouchableOpacity onPress={() => addimage()}>
        {image == null ? (
          <View style={{ marginTop: 20 }}>
            <View style={styles.circle}>
              <Image
                source={require("../assets/add_picture.png")}
                style={styles.imgAdd1}
              ></Image>
            </View>
            <Text
              style={{
                color: "#F06B6D",
                fontWeight: "bold",
                marginTop: 10,
                textAlign: "center",
              }}
            >
              Add Photo
            </Text>
          </View>
        ) : (
          <Image source={{ uri: image }} style={styles.imgAdd2}></Image>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.txtInput}
        placeholder="Enter Your Name"
        returnKeyType="next"
        onSubmitEditing={() => ref_input2.current.focus()}
        value={name}
        onChangeText={(value) => {
          setName(value), validate_Name(value);
        }}
      ></TextInput>
      {state1.errorName ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={{ color: "red" }}>{state1.errorName}</Text>
        </Animatable.View>
      ) : null}
      <TextInput
        style={styles.txtInput}
        placeholder="Enter User Name"
        returnKeyType="next"
        onSubmitEditing={() => ref_input3.current.focus()}
        value={user_name}
        ref={ref_input2}
        onChangeText={(value) => {
          setUser_name(value), validate_Username(value);
        }}
      ></TextInput>
      {state1.errorUsername ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={{ color: "red" }}>{state1.errorUsername}</Text>
        </Animatable.View>
      ) : null}
      {state.Message == "Duplicate username" ? (
        <Animatable.View
          animation="fadeInLeft"
          duration={500}
          style={{ flexWrap: "nowrap" }}
        >
          <Text style={{ color: "red" }}>{state.Message}</Text>
        </Animatable.View>
      ) : null}
      {state.Message == "Duplicate username and email" ? (
        <Animatable.View
          animation="fadeInLeft"
          duration={500}
          style={{ flexWrap: "nowrap" }}
        >
          <Text style={{ color: "red" }}>{state.Message}</Text>
        </Animatable.View>
      ) : null}
      <TextInput
        style={styles.txtInput}
        placeholder="Enter Password"
        value={password}
        returnKeyType="next"
        secureTextEntry={true}
        onSubmitEditing={() => ref_input4.current.focus()}
        ref={ref_input3}
        onChangeText={(value) => {
          setPassword(value), validate_Password(value);
        }}
      ></TextInput>
      {state1.errorPassword ? (
        <Animatable.View
          animation="fadeInLeft"
          duration={500}
          style={{ flexWrap: "nowrap" }}
        >
          <Text style={{ color: "red" }}>{state1.errorPassword}</Text>
        </Animatable.View>
      ) : null}
      <TextInput
        style={styles.txtInput}
        placeholder="Confirm Password"
        onSubmitEditing={() => ref_input5.current.focus()}
        ref={ref_input4}
        returnKeyType="next"
        value={confirmpassword}
        secureTextEntry={true}
        onChangeText={(value) => {
          setConfirmpassword(value);
        }}
      ></TextInput>
      {conpass ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={{ color: "red" }}>{conpass}</Text>
        </Animatable.View>
      ) : null}
      <TextInput
        style={styles.txtInput}
        placeholder="Enter Email"
        onSubmitEditing={() => ref_input6.current.focus()}
        ref={ref_input5}
        returnKeyType="next"
        value={email}
        keyboardType={'email-address'}
        onChangeText={(value) => {
          setEmail(value), validate_Email(value);
        }}
      ></TextInput>
      {state1.errorEmail ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={{ color: "red" }}>{state1.errorEmail}</Text>
        </Animatable.View>
      ) : null}
      {state.Message == "Duplicate email" ? (
        <Animatable.View
          animation="fadeInLeft"
          duration={500}
          style={{ flexWrap: "nowrap" }}
        >
          <Text style={{ color: "red" }}>{state.Message}</Text>
        </Animatable.View>
      ) : null}
      {state.Message == "Duplicate username and email" ? (
        <Animatable.View
          animation="fadeInLeft"
          duration={500}
          style={{ flexWrap: "nowrap" }}
        >
          <Text style={{ color: "red" }}>{state.Message}</Text>
        </Animatable.View>
      ) : null}
      <TextInput
        style={styles.txtInput}
        placeholder="Enter Phonenumber"
        value={phone}
        ref={ref_input6}
        keyboardType={"numeric"}
        maxLength={10}
        onChangeText={(value) => {
          setPhone(value), validate_Phonenumber(value);
        }}
      ></TextInput>
      {state1.errorPhonenumber ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={{ color: "red" }}>{state1.errorPhonenumber}</Text>
        </Animatable.View>
      ) : null}
      {state.Message == "Register is successful" ? (
        <Animatable.View
          animation="fadeInLeft"
          duration={500}
          style={{ flexWrap: "nowrap" }}
        >
          <Text style={{ color: "green", marginTop: 20, fontSize: 24 }}>
            {state.Message}
          </Text>
        </Animatable.View>
      ) : null}
      <TouchableOpacity style={styles.btn} onPress={() => onSubmit_Register()}>
        <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>
          Create Account
        </Text>
      </TouchableOpacity>

    </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFF8EF",
  },

  circle: {
    backgroundColor: "#FCC046",
    borderRadius: 100,
    padding: 30,
  },

  imgAdd1: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginLeft: -5,
  },

  imgAdd2: {
    width: 180,
    height: 180,
    borderRadius: 100,
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
    marginTop: 20,
  },

});

export default RegisterScreen;
