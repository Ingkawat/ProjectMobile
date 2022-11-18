import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { Text, View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
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
import EqualDivisionScreen from "../screens/EqualDivisionScreen";
import UnEqualDivisionScreen from "../screens/UnEqualDivisionScreen";
import ManageBillScreen from "../screens/ManageBillScreen";
import PayScreen from "../screens/PayScreen";
import BillNotPayScreen from "../screens/BillNotPayScreen";
import BillPayAlreadyScreen from "../screens/BillPayAlreadyScreen";
import ContactScreen from "../screens/ContactScreen";
import { io } from "socket.io-client";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { state, clearLocal } = useContext(AuthContext);
  const socket = io("http://192.168.1.12:3000", { transports: ["websocket"] });
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        labelStyle={{ color: "#fff" }}
        onPress={() => {
          clearLocal();
          socket.emit("disconnectAccount");
        }}
      />
    </DrawerContentScrollView>
  );
}

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

function UserTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        swipeEnabled: false,
      }}
    >
      <Tab.Screen
        name={"NotPay"}
        component={SeegroupScreen}
        options={{ tabBarActiveTintColor: "#000" }}
      ></Tab.Screen>
      <Tab.Screen
        name={"PayAlready"}
        component={PayalreadyScreen}
        options={{ tabBarActiveTintColor: "#000" }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

function BillTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        swipeEnabled: false,
      }}
    >
      <Tab.Screen
        name={"BillNotPay"}
        component={BillNotPayScreen}
        options={{ tabBarActiveTintColor: "#000" }}
      ></Tab.Screen>
      <Tab.Screen
        name={"BillPayAlready"}
        component={BillPayAlreadyScreen}
        options={{ tabBarActiveTintColor: "#000" }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

function LoginNavigator() {
  const { state, tryLocalSingin } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      {state.username == null ? (
        <Stack.Group
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
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group
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
            name="Home"
            component={HomeNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="EqualDiv" component={EqualDivisionScreen} />
          <Stack.Screen name="UnEqualDiv" component={UnEqualDivisionScreen} />
          <Stack.Screen name="Pay" component={PayScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: "#5A6199",
        drawerInactiveTintColor: "#fff",
        drawerActiveBackgroundColor: "#FFD47C",
        drawerStyle: {
          backgroundColor: "#5A6199",
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#5A6199",
        },
      }}
    >
      <Drawer.Screen
        name="CreateBill"
        component={CreateBillScreen}
        options={{ headerTitle: "" }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="BillBuilder"
        component={BillTabNavigator}
        options={{
          drawerLabel: "BillBuilder",
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="BillUser"
        component={UserTabNavigator}
        options={{ drawerLabel: "BillUser" }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Contact"
        // component={() => <ContactScreen nameuser={state.username} />}
        component={ContactScreen}
        options={{ drawerLabel: "Contact" }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function MyNavigator() {
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
}
