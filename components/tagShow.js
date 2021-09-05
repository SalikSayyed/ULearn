import React from 'react'
import { View, StyleSheet } from 'react-native'
import Color from '../config/Colors'
import AppText from './appText'

const TagShow = () => {
  return (
    <View style={[styles.tagView, { backgroundColor: Color.backgroundRed }]}>
      <AppText text="Best Seller" customStyle={[styles.tagText, { color: Color.textRed }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  tagView: {
    paddingHorizontal: 5,
    height: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  tagText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Color.white,
  },
})

export default TagShow
