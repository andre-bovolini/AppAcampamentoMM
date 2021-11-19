import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Template } from '../screens/Template';
import { StatusBar } from 'react-native';
import { MyTabs } from './TabRoutes';

export default function Routes() {
  return (
    <NavigationContainer>
        <StatusBar  backgroundColor={"rgba(0, 0, 0, 0.7)"}
        barStyle={'light-content'}
        translucent/>
        <MyTabs />
    </NavigationContainer>
  );
}