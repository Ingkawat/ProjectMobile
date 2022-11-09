import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import RegisterScreen from '../screens/RegisterScreen'
import EqualDivisionScreen from '../screens/EqualDivisionScreen'
import UnEqualDivisionScreen from '../screens/UnEqualDivisionScreen'
import PayScreen from '../screens/PayScreen'
import ManageBillScreen from '../screens/ManageBillScreen'

const Stack = createNativeStackNavigator();

export default function MyNavigator(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true,  headerTintColor:'white',
      headerStyle:{
        backgroundColor: '#5A6199',
      }}}>
        {/* <Stack.Screen name='สร้างโปรไฟล์' component={RegisterScreen} options={{headerTitleAlign: 'center', headerTitleStyle:{
            fontWeight: 'bold'
        }}}/> */}
        {/* <Stack.Screen name='หารเท่ากัน' component={EqualDivisionScreen} options={{headerTitleAlign: 'center', headerTitleStyle:{
            fontWeight: 'bold'
        }}}/> */}
        {/* <Stack.Screen name='หารไม่เท่ากัน' component={UnEqualDivisionScreen} options={{headerTitleAlign: 'center', headerTitleStyle:{
            fontWeight: 'bold'
        }}}/> */}
        {/* <Stack.Screen name='เพิ่มช่องทางการชำระเงิน' component={PayScreen} options={{headerTitleAlign: 'center', headerTitleStyle:{
            fontWeight: 'bold'
        }}}/> */}
        <Stack.Screen name='จัดการบิล' component={ManageBillScreen} options={{headerTitleAlign: 'center', headerTitleStyle:{
            fontWeight: 'bold'
        }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

