import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';

import ArticleScreen from './src/screens/ArticleScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Article">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
