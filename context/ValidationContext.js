import createDataContext from "./createDataContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validate = (state, action) => {
    switch (action.type) {
        case 'username':
            return {...state, errorUsername: action.error}
        case 'password':
            return {...state, errorPassword: action.error}
        case 'email':
            return {...state, errorEmail: action.error}
        case 'name':
            return {...state, errorName: action.error}
        case 'phonenumber':
            return {...state, errorPhonenumber: action.error}
        default:
            return state;
    }

};

const validate_Username = dispatch => async (value) => {
    
    if(value.length > 5){
        dispatch({type:'username', status: true, error:""});   
      }
      else{
        dispatch({type:'username', error:"Username must be a number and have 5 characters.",status: false});
      }

}

const validate_Password = dispatch => async (value) => {
    var pass = value;
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#@_=;:()*"':{}[%\$%\^&\*])(?=.{8,})/;
    
    if(reg.test(value) === true){
        dispatch({type:'password', error:""});   
      }
      else{
        dispatch({type:'password', error:"Password must have a large, small, special, and must have 8 characters."});
      }

}

const validate_Email = dispatch => async (value) => {
    let reg1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
    
    if(reg1.test(value) === true){
        dispatch({type:'email', error:""});   
      }
      else{
        dispatch({type:'email', error:"Is not e-mail rules."});
      }

}

const validate_Name = dispatch => async (value) => {
    if(value.length >= 2){
        dispatch({type:'name', error:""});   
      }
      else{
        dispatch({type:'name', error:"Name must contain at least 2 characters."});
      }

}

const validate_Phonenumber = dispatch => async (value) => { 
    if(value.length > 9 && value.length < 11 && !isNaN(value)){
        dispatch({type:'phonenumber', error:""});   
      }
      else{
        dispatch({type:'phonenumber', error:"Phonenumber must be a number and have 10 characters."});
      }

}

export const {Provider, Context} = createDataContext(
    validate,
    {validate_Username, validate_Password, validate_Email,validate_Name,validate_Phonenumber},
    {errorUsername: '', errorPassword:'', errorEmail:'', errorName:'', errorPhonenumber:''}
    
)