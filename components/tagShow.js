import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Color from '../config/Colors'

const TagShow = () => {
  return (
    <View style={[styles.tagView, { backgroundColor: Color.backgroundRed }]}>
      <Text style={[styles.tagText, { color: Color.textRed }]}>BEST SELLER</Text>
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
