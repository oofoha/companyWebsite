/**
 * All rights for this app belong to OffTerra,LLC
 *
 */

import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, } from 'react-native';


// or any files within the Snack
import strings from './values/strings'
import Rounds from './screens/Rounds'
import Winner from './screens/Winner'

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (

      <NavigationContainer>
      <Stack.Navigator initialRouteName='Rounds'>
        <Stack.Screen name='Rounds' component={Rounds} options={ {title: strings.overall_title_display_text }}/>
        <Stack.Screen name='Winner' component={Winner} options={{ title: strings.overall_title_display_text }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fefcfa',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
