import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
export default function Dashboard() {
  return (
    <View style={styles.main}>
    <Text>Dashboard</Text>
  </View>
  )
}
const styles = StyleSheet.create({
    main:{
        flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

    }
})
