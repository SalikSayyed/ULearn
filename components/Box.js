import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SvgXml } from 'react-native-svg'
import Color from '../config/Colors'

export default function Box({ svg, customBoxStyle, customSvgStyle }) {
  return (
    <View style={[styles.container, customBoxStyle]}>
      <View style={styles.box}>
        {svg && (
          <SvgXml width="100%" height="100%" xml={svg} style={[styles.imageSvg, customSvgStyle]} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
  },
  box: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: Color.yellow,
    padding: 5,
    alignItems: 'center',
    borderRadius: 40,
  },
  imageSvg: {
    position: 'absolute',
    transform: [{ translateY: -80 }],
  },
})
