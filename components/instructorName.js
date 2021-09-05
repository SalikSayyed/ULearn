import React from 'react'
import { View, StyleSheet } from 'react-native'

import Color from '../config/Colors'
import AppText from './appText'

const InstructorName = ({ text }) => {
  return (
    <View style={styles.nameStyle}>
      <AppText text="👤" customStyle={styles.iconStyle} />
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
  iconStyle: {
    fontSize: 14,
    color: Color.grey,
  },
  teacherStyle: {
    fontSize: 14,
    color: Color.grey,
  },
})
export default InstructorName
