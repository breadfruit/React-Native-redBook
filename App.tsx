// In App.js in a new project

import {SafeAreaProvider} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StatusBar} from 'react-native'
import React from 'react';
import PageA from './src/modules/PageA';
import PersonalInfo from './src/modules/PersonalInfo';
import ViewDemo from './src/components/ViewDemo';
import TextDemo from './src/components/TextDemo';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}
      >
      </StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='TextDemo'
        >
          <Stack.Screen 
            name="TextDemo" 
            component={TextDemo} 
            options={{ 
              title: 'My home', 
           }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;