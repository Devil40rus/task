import React from 'react';
import Constants from 'expo-constants';
import ProfileScreen from './screens/ProfileScreen';
import CreateScreen from './screens/CreateScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styled from 'styled-components/native';

const Stack = createStackNavigator();

function App() {
  console.disableYellowBox = true;
  return (
    <Container style={{ marginTop: Constants.statusBarHeight }}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
      </Stack.Navigator>
    </Container>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
