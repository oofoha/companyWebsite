/**
 * All rights for this app belong to OffTerra,LLC
 *
 */

import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, TouchableOpacity  } from 'react-native';
import { Card } from 'react-native-paper';

import strings from '../values/strings'

export default function Winner( {navigation, route} ) {
const { finalWinner } = route.params;
console.log('winner screen got',finalWinner);

  if (!finalWinner) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{strings.winner_error_text}</Text>
      </View>
    );
  }

  return (
  <SafeAreaView style={styles.container}>

    <Text style={styles.text}>{ strings.winner_text }</Text>
      <Card>
          <View >
            <Image source={ finalWinner.image } style={styles.image} />
          </View>
      </Card>
      <View>
        <Text style={styles.text}>{ finalWinner.name }</Text>
        <Text style={styles.text}>'Description and 1-3 Suggested actions go here'</Text> 
     </View>

      <TouchableOpacity onPress={() => {
              navigation.reset({
      index: 0,
      routes: [{ name: 'Rounds' }],
    });
          }}>
            <View style={styles.buttonContainer}>
                <Text style={{ color: '#000000' }}>
                {strings.start_over_button_text}
                </Text>
            </View>
      </TouchableOpacity>
      
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefcfa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flex: 1,
  },
       paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    text: {
    fontSize: 18,
    marginBottom: 20,
  },
    image: {
    height: 128,
    width: 128,
    padding: 24,
    margin: 16,
  },
  buttonContainer:{
       flex: 1,
       backgroundColor: '#FFFFFF',
       alignItems: 'center', 
       justifyContent: 'center',
       borderRadius: 15,
       padding: 8,
       marginVertical: 16,
       marginHorizontal: 8,
     },

});