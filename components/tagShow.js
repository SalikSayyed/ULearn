import React from 'react'
import { View, StyleSheet } from 'react-native'
import Color from '../config/Colors'
import AppText from './appText'

const TagShow = ({ backgroundColor, textColor, tagName }) => {
  return (
    <View style={[styles.tagView, { backgroundColor: backgroundColor }]}>
      <AppText text={tagName} customStyle={[styles.tagText, { color: textColor }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  tagView: {
    paddingHorizontal: 5,
    height: 24,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  tagText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Color.white,
  },
})

export default TagShow
