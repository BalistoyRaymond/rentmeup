import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import { ForgotPassword } from "./src/forgotpass/ForgotPassword";

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false ,customAnimationOnGesture:true,animation:"slide_from_right"} }  name="ForgotPassword" component={ForgotPassword} /> 
  
  
  </Stack.Navigator>
  </NavigationContainer>
  );
}