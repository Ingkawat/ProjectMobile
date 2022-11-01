import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function MyNavigator(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true,  headerTintColor:'white',
      headerStyle:{
        backgroundColor: '#5A6199',
      }}}>
        <Stack.Screen name='สร้างโปรไฟล์' component={RegisterScreen} options={{headerTitleAlign: 'center', headerTitleStyle:{
            fontWeight: 'bold'
        }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

