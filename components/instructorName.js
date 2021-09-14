import React from 'react'
import { View, StyleSheet } from 'react-native'

import Color from '../config/Colors'
import AppText from './appText'
import Ion from 'react-native-vector-icons/Ionicons'

const InstructorName = ({ text }) => {
  return (
    <View style={styles.nameStyle}>
      <Ion name="person" color={Color.textGrey} size={18} />
      <AppText text={text} customStyle={styles.teacherStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  nameStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 90,
  },
  teacherStyle: {
    fontSize: 14,
    color: Color.grey,
  },
})
export default InstructorName
