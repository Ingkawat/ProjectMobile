import React, {useContext, useEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Context as AuthContext } from '../context/AuthContext';
import Login from "../screens/LoginScreen";
import CreateBill from "../screens/CreateBillScreen";
import Register from "../screens/RegisterScreen";
import ForgotPass from "../screens/ForgotPassScreen"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MyNavigator() {
  const {state, tryLocalSingin} = useContext(AuthContext); 
  return (
    <NavigationContainer>
      {state.username == null ? (
      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
      </Stack.Navigator>
      ):(<Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="CreateBill" component={CreateBill} />
      </Stack.Navigator>)}
    </NavigationContainer>

  );
}
