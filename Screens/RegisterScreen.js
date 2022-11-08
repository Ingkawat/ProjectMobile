import React , {useState} from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import { useRef } from "react";
import { Avatar } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';

function RegisterScreen ({navigation}) {
    const ref_textinput2 = useRef();
    const ref_textinput3 = useRef();
    const ref_textinput4 = useRef();
    const ref_textinput5 = useRef();
    const ref_textinput6 = useRef();
    
    const [image, setImage] = useState(null);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    const [userInfo, setUserInfo] = useState({
      name: '',
      username: '',
      password: '',
      confirmpassword: '',
      email: '',
      phonenum: '',

    })

    const isValidObjField = (obj) => {
      return Object.values(obj).every(value => value.trim())
    }
    
    const updateError = (error, stateUpdater) =>{
      stateUpdater(error);
      setTimeout(() => {
        stateUpdater('')
      }, 2000);
    }
    
    const {name, username, password, confirmpassword, email, phonenum} = userInfo
    const [errorReqAll, setErrorReqAll] = useState('')
    const [checkValidName, setCheckValidName] = useState(true);
    const [checkValidUsername, setCheckValidUsername] = useState(true);
    const [checkValidPassword, setCheckValidPassword] = useState(true);
    const [checkValidConfirmPassword, setCheckValidConfirmPassword] = useState(true);
    const [checkValidEmail, setCheckValidEmail] = useState(true);
    const [checkValidPhonenum, setCheckValidPhonenum] = useState(true);

    const handleOnChangeText = (value, yourname) => {
      setUserInfo({...userInfo, [yourname]: value});
    }

    const reqAllField = () => {
      if(!isValidObjField(userInfo)) return updateError('Request all fields!', setErrorReqAll)

    }

    const validateName = (name) => {
      if(!name.trim() || name.length < 4){
        return false
      }
      return true
    }

    const validateUsername = (username) => {
      if(!username.trim() || username.length < 5){
        return false
      }
      return true
    }
    
    const validatePassword = (password) => {
      if(!password.trim() || password.length < 6){
        return false
      }
      return true
    }

    const validateConfirmPassword = (confirmpassword) => {
      if(password !== confirmpassword){
        return false
      }
      return true
    }

    const validateEmail = (email) => {
      let txt = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (txt.test(email)){
        return true
      }
      return false
    }

    const validatePhonenum = (number) =>{
      if(!number.trim() || number.length < 10){
        return false
      }
      return true
    }

  return (
    <View style={styles.container} navigation={navigation}>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={pickImage}>
            <Avatar.Image
              size={70}
              source={{ uri: image }}
            />
            <Text style={styles.btnTextAddphoto}>Add Photo</Text>
          </TouchableOpacity>
        </View>
        <TextInput returnKeyType='next' autoCorrect={false} style={styles.textinput} value={name} placeholder="Enter Your Name" 
        onSubmitEditing={() => ref_textinput2.current.focus()}
        onChangeText={(value) => {
          handleOnChangeText(value, 'name')
          const IsValid = validateName(value);
          IsValid? setCheckValidName(true) : setCheckValidName(false);}}/>

        <Text style={styles.textfail}>{checkValidName? '' : 'Name must be more than 3 characters!'}</Text>
        {errorReqAll ? <Text style={styles.textfail2}>{errorReqAll}</Text>:null}

        <TextInput returnKeyType='next' autoCorrect={false} style={styles.textinput} value={username} placeholder="Enter Username" 
        onSubmitEditing={() => ref_textinput3.current.focus()} ref={ref_textinput2}
        onChangeText={(value) => {
          handleOnChangeText(value, 'username')
          const IsValid = validateUsername(value);
          IsValid? setCheckValidUsername(true) : setCheckValidUsername(false);}}/>

        <Text style={styles.textfail}>{checkValidUsername? '' : 'Username must be more than 6 characters!'}</Text>
        {errorReqAll ? <Text style={styles.textfail2}>{errorReqAll}</Text>:null}
        
        <TextInput returnKeyType='next' autoCorrect={false} secureTextEntry={true}
        style={styles.textinput} value={password} placeholder="Enter Password" 
        onSubmitEditing={() => ref_textinput4.current.focus()} ref={ref_textinput3}
        onChangeText={(value) => {
          handleOnChangeText(value, 'password')
          const IsValid = validatePassword(value);
          IsValid? setCheckValidPassword(true) : setCheckValidPassword(false);}}/>

        <Text style={styles.textfail}>{checkValidPassword? '' : 'Password is less than 6 characters!'}</Text>
        {errorReqAll ? <Text style={styles.textfail2}>{errorReqAll}</Text>:null}
        
        <TextInput returnKeyType='next' autoCorrect={false} secureTextEntry={true}
        style={styles.textinput} value={confirmpassword} placeholder="Confirm Password"
        onSubmitEditing={() => ref_textinput5.current.focus()} ref={ref_textinput4}
        onChangeText={(value) => {
          handleOnChangeText(value, 'confirmpassword')
          const IsValid = validateConfirmPassword(value);
          IsValid? setCheckValidConfirmPassword(true) : setCheckValidConfirmPassword(false);}}/>

        <Text style={styles.textfail}>{checkValidConfirmPassword? '' : 'Password does not match!'}</Text>
        {errorReqAll ? <Text style={styles.textfail2}>{errorReqAll}</Text>:null}
        
        <TextInput keyboardType="email-address" autoCorrect={false} returnKeyType='next' style={styles.textinput} 
        value={email} placeholder="Enter Email"  onSubmitEditing={() => ref_textinput6.current.focus()} ref={ref_textinput5}
        onChangeText={(value) => {
          handleOnChangeText(value, 'email')
          const IsValid = validateEmail(value);
          IsValid? setCheckValidEmail(true) : setCheckValidEmail(false);}}/>
        
        <Text style={styles.textfail}>{checkValidEmail? '' : 'Invalid Email!'}</Text>
        {errorReqAll ? <Text style={styles.textfail2}>{errorReqAll}</Text>:null}
        
        <TextInput keyboardType="phone-pad" autoCorrect={false} style={styles.textinput} maxLength={10} returnKeyType='done' 
        value={phonenum} placeholder="Enter Phonenumber" ref={ref_textinput6}
        onChangeText={(value) => {
          handleOnChangeText(value, 'phonenum')
          const IsValid = validatePhonenum(value);
          IsValid? setCheckValidPhonenum(true) : setCheckValidPhonenum(false);}}/>

        <Text style={styles.textfail}>{checkValidPhonenum? '' : 'Phone number must be equal to 10 characters!'}</Text>
        {errorReqAll ? <Text style={styles.textfail2}>{errorReqAll}</Text>:null}

        <TouchableOpacity onPress={reqAllField} style={styles.btn}>
            <Text style={styles.btntext}>Next</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8EF',
  },

  textinput: {
    height: 30,
    width: 250,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 10,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  btn: {
    alignSelf: 'center',
    width: 150,
    padding: 10,
    backgroundColor: '#F06B6D',
    marginTop: 20,
    borderRadius: 10,
  },

  btntext: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  btnTextAddphoto: {
    color: '#F06B6D',
    fontWeight: 'bold',
    textAlign: 'center',

  },

  textfail: {
    fontSize: 12,
    color: 'red',
    marginLeft: 65,
    marginTop: -13,
  },

  textfail2: {
    fontSize: 12,
    color: 'red',
    marginLeft: 80,
    marginTop: 5,
  }
});

export default RegisterScreen;
