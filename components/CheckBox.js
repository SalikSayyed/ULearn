import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Color from '../config/Colors'
export default function CheckBox() {
  const [tick, tickChanger] = React.useState(true)
  return (
    <TouchableWithoutFeedback onPress={() => tickChanger(!tick)}>
      <View style={[styles.checkBox, { backgroundColor: tick ? Color.buttonBlue : Color.white }]}>
        <Text style={styles.tickStyle}>{tick ? '✔' : ' '}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Color.grey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  tickStyle: {
    color: Color.white,
  },
})
