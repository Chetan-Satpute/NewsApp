import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import ArticleScreen from './src/screens/ArticleScreen';
import HomeScreen from './src/screens/HomeScreen';

export type RootParamList = {
  Home: undefined;
  Article: {url: string};
};

const Stack = createNativeStackNavigator<RootParamList>();

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-neutral-900">
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Article"
              component={ArticleScreen}
              initialParams={{url: ''}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
