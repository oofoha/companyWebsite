/**
 * All rights for this app belong to OffTerra,LLC
 *
 */

import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import { useState, useEffect } from "react";
import strings from '../values/strings'



export default function Rounds( {navigation} ) {

// let loveAll = [
//       require('../assets/materialNeeds_image.png') ,
//       require('../assets/helpingEachOther_image.png'),
//       require('../assets/spendingTimeTogether_image.png'),
//       require('../assets/emotionalNeeds_image.png'),
//       require('../assets/sayItWithWords_image.png') ,
//       require('../assets/physicalTouch_image.png') ,
//       require('../assets/sameSide_image.png') ,
//       require('../assets/bringingOutBest_image.png') 
//    ];

let loveAll = [
      { name: strings.loveTitle1, image: require('../assets/materialNeeds_image.png') } ,
      { name: strings.loveTitle2, image: require('../assets/helpingEachOther_image.png') },
      { name: strings.loveTitle3, image: require('../assets/spendingTimeTogether_image.png') },
      { name: strings.loveTitle4, image: require('../assets/emotionalNeeds_image.png') },
      { name: strings.loveTitle5, image: require('../assets/sayItWithWords_image.png') },
      { name: strings.loveTitle6, image: require('../assets/physicalTouch_image.png') },
      { name: strings.loveTitle7, image: require('../assets/sameSide_image.png') },
      { name: strings.loveTitle8, image: require('../assets/bringingOutBest_image.png') }
   ];

  const [prevWinners, setWinners] = useState([]);
  const [matchups, setMatchups] = useState([]);
  const [currentMatchup, setCurrentMatchup] = useState(0);
  const [round, setRound] = useState(1);

//Shuffle entries
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

//Create Matchups for a given round
  function createMatchups(roundEntries) {
    let matchups = [];

    for (let i = 0; i < roundEntries.length; i += 2) {
      matchups.push([roundEntries[i], roundEntries[i + 1]]);
    }
    return matchups;
  }

  useEffect(() => {
    const shuffledLove = shuffle(loveAll);
    const round1 = createMatchups(shuffledLove);
    setMatchups(round1);
  }, []);

if (matchups.length === 0) return null;

  const handlePress = (imageObj) => {
    setWinners((prevWinners) => [...prevWinners, imageObj]);
    
    if (currentMatchup < matchups.length - 1) {
      setCurrentMatchup(currentMatchup + 1);
    } else if (round === 1) {
      const round2 = createMatchups([...winners, imageObj]);
      setWinners([]);
      setMatchups(round2);
      setRound(2);
      setCurrentMatchup(0);
    } else if (round === 2) {
      const round3 = createMatchups([...winners, imageObj]);
      setWinners([]);
      setMatchups(round3);
      setRound(3);
      setCurrentMatchup(0);
    } else if (round === 3) {
      setWinners([]);
      const finalWinner = winners;
      console.log('rounds has',finalWinner);
      navigation.navigate( 'Winner' , { finalWinner } );
    }

    return finalWinner;
  };

  
  return (
  <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        {strings.directions_text}
      </Text>
      <Card>
    <View style={styles.horizontalRow}>
        {matchups[currentMatchup].map((imageObj, index) => (

          <TouchableOpacity key={index} onPress={() => handlePress(imageObj)}>

            <Image source={imageObj.image} style={styles.image} />

          </TouchableOpacity>

        ))}

        </View>
            </Card>
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
  logo: {
    height: 128,
    width: 128,
    padding: 24,
    margin: 16,
  },
  horizontalRow:  {
    flexDirection:'row',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  title:{
      flex: 1,
      marginVertical: 16,
      marginHorizontal: 4,
      padding: 8,
      lineHeight: 32,
      fontSize: 18,
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

});