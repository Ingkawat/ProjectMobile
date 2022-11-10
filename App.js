import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as AuthProvider } from './context/AuthContext';
import { Provider as ValidationContext } from './context/ValidationContext';
import MyNavigator from './navigation/MyNavigator';

export default function App() {
  return ( <AuthProvider >  <ValidationContext> <MyNavigator/> </ValidationContext>  </AuthProvider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
