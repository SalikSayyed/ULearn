import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import Color from '../config/Colors'
import AppText from './appText'

const InstructorName = ({ text }) => {
  return (
    <View style={styles.nameStyle}>
      <AppText text="=>" customStyle={{ fontSize: 15, color: 'grey' }} />
      <AppText text={text} customStyle={{ fontSize: 15, color: Color.grey }} />
    </View>
  )
}

const styles = StyleSheet.create({
  nameStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 90,
  },
})
export default InstructorName
