import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../config/Colors'

export default function SampleScreen() {
  return (
    <View style={styles.screenStyle}>
      <Text style={styles.textStyle}>Hello this is complete Screen and I am the TEXT on IT!!!</Text>
      <Text style={styles.textStyle}> And This is ICON u have to use Press=> win + . "🌈"</Text>
      <Text style={styles.textStyle}>
        U Can Find This Screen From "screens" folder then "SampleScreen"
      </Text>
      <Text style={styles.textStyle}>
        Also Every Time inorder to use any Color try to find it './config/colors' import it as
        Colors then Colors.textRed
      </Text>
      <Text style={styles.textStyle}>U Should ADD YOUR OWN Colors also in ./config/colors</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: Colors.buttonBlue,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: Colors.textRed,
    fontSize: 25,
    fontWeight: 'bold',
  },
})
