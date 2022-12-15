import React from 'react';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './app/components/MyStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import Intermediate from './app/screens/intermediate';
// import ServiceDetails from './app/screens/serviceDetails';

const App = () => {
  // return <ServiceDetails />;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
