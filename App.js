import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import HomeScreen from './screens/HomeScreen';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar backgroundColor="white"/>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:"#3385ff",
         
        },
        headerTintColor:"white"
      }}>
        <Stack.Screen name='Budget Entry' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    <Toast/>
    </>    
    
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
