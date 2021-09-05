import React from 'react'
import { StyleSheet, Text, Platform } from 'react-native'

import Color from '../config/Colors'
const appText = ({ customStyle, text, ...otherProps }) => (
  <Text style={[styles.textStyle, customStyle]} {...otherProps}>
    {text}
  </Text>
)

const styles = StyleSheet.create({
  textStyle: {
    color: Color.black,
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
})
export default appText
