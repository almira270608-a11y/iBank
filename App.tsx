import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/Loginscreen';
import SignUpScreen from './src/SignUpScreen';
import ForgotPasswordScreen from './src/ForgotPasswordScreen';
import ChangePasswordScreen from './src/ChangePasswordScreen';
import PasswordSuccessScreen from './src/PasswordSuccessScreen';
import HomeScreen from './src/HomePage';
import SearchScreen from './src/SearchScreen';
import BranchSearchScreen from './src/BranchSearchScreen';
import InterestRateScreen from './src/InterestRateScreen';
import ExchangeRateScreen from './src/ExchangeRateScreen';
import SettingScreen from './src/SettingScreen';
import LanguageScreen from './src/LanguageScreen';
import ExchangeScreen from './src/ExchangeScreen';
import TransferScreen from './src/TransferScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Transfer" component={TransferScreen} />
        <Stack.Screen name="Exchange" component={ExchangeScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="InterestRate" component={InterestRateScreen} />
        <Stack.Screen name="ExchangeRate" component={ExchangeRateScreen} />
        <Stack.Screen name="BranchSearch" component={BranchSearchScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="PasswordSuccess" component={PasswordSuccessScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
