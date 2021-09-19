import React from 'react'
import { View, StyleSheet } from 'react-native'

import Color from '../config/Colors'
import AppText from './AppText'
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
    justifyContent: 'flex-start',
    width: 200,
  },
  teacherStyle: {
    fontSize: 14,
    color: Color.grey,
    paddingHorizontal: 5,
  },
})
export default InstructorName
