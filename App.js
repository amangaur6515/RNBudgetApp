import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './redux/store';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import HomeScreen from './screens/HomeScreen';
import BudgetListingScreen from './screens/BudgetListingScreen'


const Stack=createNativeStackNavigator();
  
export default function App() {
  
  return (
    <NavigationContainer>
    <Provider store={store}>
      <StatusBar backgroundColor="white"/>
        
        <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:"#3385ff",
          },
          headerTintColor:"white",
          headerTitleAlign: "center",
        }}>
          <Stack.Screen name='Budget Entry' component={HomeScreen} />
          <Stack.Screen name='Budget List' component={BudgetListingScreen} />
        </Stack.Navigator>
      
      <Toast/>
    </Provider>    
    </NavigationContainer>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
