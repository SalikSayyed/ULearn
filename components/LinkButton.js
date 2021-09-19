import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Color from '../config/Colors'
import AppText from './appText'

const LinkButton = ({ buttonColor, tagName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.tagView]}>
        <AppText text={tagName} customStyle={[styles.tagText, { backgroundColor: buttonColor }]} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tagText: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.buttonBlue,
  },
})

export default LinkButton
