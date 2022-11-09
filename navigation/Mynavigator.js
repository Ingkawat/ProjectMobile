import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SeegroupScreen from "../screens/SeegroupScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ForgotPassScreen from "../screens/ForgotPassScreen";
import BillUserScreen from "../screens/BillUserScreen";
import AttachevidenceScreen from "../screens/AttachevidenceScreen";
import PayMoneyScreen from "../screens/PaymoneyScreen";
import PayalreadyScreen from "../screens/PayalreadyScreen";
import CreateBillScreen from "../screens/CreateBillScreen";
import { ScreenStackHeaderCenterView } from "react-native-screens";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            // onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: isFocused ? "#FFD47C" : "#FFEBD0",
              padding: 20,
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 14, fontWeight: "bold" }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={{
          swipeEnabled: false,
        }}
      >
        <Tab.Screen
          name={"notpaid"}
          component={SeegroupScreen}
          options={{ tabBarActiveTintColor: "#000" }}
        ></Tab.Screen>
        <Tab.Screen
          name={"paidAlready"}
          component={PayalreadyScreen}
          options={{ tabBarActiveTintColor: "#000" }}
        ></Tab.Screen>
      </Tab.Navigator>
    </Tab.Navigator>
  );
}

function LoginNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#5A6199",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="forgotpass" component={ForgotPassScreen} />
      <Stack.Screen
        name="createBill"
        component={CreateBillScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function MyNavigator() {
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
}
