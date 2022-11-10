import React, { useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import * as ImagePicker from "expo-image-picker";

import { Context as AuthContext } from "../context/AuthContext";
import { Context as ValidationContext } from "../context/ValidationContext";

const RegisterScreen = () => {
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
    
   
    setImage(result.assets[0].uri);
    
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
      if(user_name != '' && name != '' && password != '' && email != '' && phone != ''){
        register({ user_name, name, password, phone, email, image });
        ButtonAlert();
      } else{
        console.log("not pass")
      }
      
      
    } else {
      console.log("password not match");
    }
  };

  const ButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "Register is successful",
      [
        { text: "Go back to login", onPress: () => { navigation.navigate("Login")} }
      ]
    );


  return (
    <View style={styles.screen}>
      <View style={styles.circle}>
        <TouchableOpacity onPress={() => addimage()}>
          <Image
            source={require("../assets/add_picture.png")}
            style={styles.imgAdd}
          ></Image>
        </TouchableOpacity>
      </View>
      <Text style={{ color: "#F06B6D", fontWeight: "bold", marginTop: 10 }}>
        Add Photo
      </Text>
      <TextInput
        style={styles.txtInput}
        placeholder="Enter Your Name"
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
        value={user_name}
        onChangeText={(value) => {
          setUser_name(value), validate_Username(value);
        }}
      ></TextInput>
      {state1.errorUsername ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={{ color: "red" }}>{state1.errorUsername}</Text>
        </Animatable.View>
      ) : null}
      <TextInput
        style={styles.txtInput}
        placeholder="Enter Password"
        value={password}
        onChangeText={(value) => {
          setPassword(value), validate_Password(value);
        }}
      ></TextInput>
      {state1.errorPassword ? (
        <Animatable.View
          animation="fadeInLeft"
          duration={500}
          style={{ flexWrap: "nowrap", marginLeft: "5%", marginRight: "2%" }}
        >
          <Text style={{ color: "red", left: 25 }}>{state1.errorPassword}</Text>
        </Animatable.View>
      ) : null}
      <TextInput
        style={styles.txtInput}
        placeholder="Confirm Password"
        value={confirmpassword}
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
        value={email}
        onChangeText={(value) => {
          setEmail(value), validate_Email(value);
        }}
      ></TextInput>
      {state1.errorEmail ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={{ color: "red" }}>{state1.errorEmail}</Text>
        </Animatable.View>
      ) : null}
      <TextInput
        style={styles.txtInput}
        placeholder="Enter Phonenumber"
        value = {phone} onChangeText={(value) => {setPhone(value), validate_Phonenumber(value)}}
      ></TextInput>
      {state1.errorPhonenumber ?
          <Animatable.View animation="fadeInLeft" duration={500}>
           <Text style={{color:"red"}}>{state1.errorPhonenumber}</Text>
          </Animatable.View> :null }
      <TouchableOpacity style={styles.btn} onPress={()=> onSubmit_Register()}>
        <Text style={{ color: "#FFF8EF", fontWeight: "bold" }}>
          Create Account
        </Text>
      </TouchableOpacity>
      {state.Message == 'register is success' ? (
        <Animatable.View
          animation="fadeInLeft"
          duration={500}
          style={{ flexWrap: "nowrap" }}
        >
          <Text style={{ color: "green" }}>{state.Message}</Text>
        </Animatable.View>
      ) :(
        <Animatable.View
          animation="fadeInLeft"
          duration={500}
          style={{ flexWrap: "nowrap" }}
        >
          <Text style={{ color: "red" }}>{state.Message}</Text>
        </Animatable.View>
      )}

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
