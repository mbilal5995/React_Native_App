import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Animated, Text, View } from 'react-native';


export default function Splash() {
  const opacity = useState(new Animated.Value(0))[0]
  
  useEffect(() => {
      fadeIn();
    //   fadeOut();
  }, [])
  
    function fadeIn() {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 2000,
            useNativeDriver:true
        }).start()
    }

    return (
     <View style={styles.container}>
            <Animated.Image source={require('../assets/logo.png')} style={{opacity}} />
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
      fontSize: 32,
      

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

