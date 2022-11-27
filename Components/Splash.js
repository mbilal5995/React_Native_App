import React from 'react'
import { Image, StyleSheet, Animated, Text, View } from 'react-native';


export default function Splash() {
  return (
     <View style={styles.container}>
     <Image source={require('../assets/logo.png')}/>
     <Text style={styles.heading}>Ambiance</Text>
     <Text style={styles.tagline}>Sliding into the future</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    // flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    fontWeight:'700',
    fontSize:32,

  },
  tagline: {
    // flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:5,
    fontWeight:'400',
    fontSize:16,

  }
});

