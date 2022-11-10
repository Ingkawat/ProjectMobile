import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import RegisterScreen from "../screens/RegisterScreen";
import EqualDivisionScreen from "../screens/EqualDivisionScreen";
import UnEqualDivisionScreen from "../screens/UnEqualDivisionScreen";
import PayScreen from "../screens/PayScreen";
import ManageBillScreen from "../screens/ManageBillScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "#FFFFFF",
        drawerStyle: { backgroundColor: "#5A6199" },
        headerStyle: { backgroundColor: "#5A6199" },
        headerTintColor: "#FFEBD0",
      }}
    >
      <Drawer.Screen
        name="หน้าแรก"
        component={RegisterScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
      />
      <Drawer.Screen
        name="บิลที่ต้องเก็บเงิน"
        component={SeegroupScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
      />
      {/* <Drawer.Screen name='บิลที่ต้องเก็บเงิน' component={SeegroupScreen} options={{headerTitleAlign: 'center', headerTitleStyle:{
          fontWeight: 'bold', color: 'white'
      }}}/> */}
    </Drawer.Navigator>
  );
}

export default function MyNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#5A6199",
          },
        }}
      >
        {
          <Stack.Screen
            name="สร้างโปรไฟล์"
            component={MyDrawer}
            options={{
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        }
        {/* { <Stack.Screen name='หารเท่ากัน' component={EqualDivisionScreen} options={{headerTitleAlign: 'center', headerTitleStyle:{
            fontWeight: 'bold'
        }}}/> }
        { <Stack.Screen name='หารไม่เท่ากัน' component={UnEqualDivisionScreen} options={{headerTitleAlign: 'center', headerTitleStyle:{
            fontWeight: 'bold'
        }}}/> }
        { <Stack.Screen name='เพิ่มช่องทางการชำระเงิน' component={PayScreen} options={{headerTitleAlign: 'center', headerTitleStyle:{
            fontWeight: 'bold'
        }}}/> }
        { <Stack.Screen name='จัดการบิล' component={ManageBillScreen} options={{headerTitleAlign: 'center', headerTitleStyle:{
            fontWeight: 'bold'
        }}}/>} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
