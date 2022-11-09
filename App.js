import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SeegroupScreen from "./screens/SeegroupScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ForgotPassScreen from "./screens/ForgotPassScreen";
import BillUserScreen from "./screens/BillUserScreen";
import AttachevidenceScreen from "./screens/AttachevidenceScreen";
import PayMoneyScreen from "./screens/PaymoneyScreen";
import PayalreadyScreen from "./screens/PayalreadyScreen";
import CreateBillScreen from "./screens/CreateBillScreen";
import MyNavigator from "./navigation/Mynavigator";
import LoadingScreen from "./screens/LoadingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default function App() {
  return <MyNavigator />;
}
