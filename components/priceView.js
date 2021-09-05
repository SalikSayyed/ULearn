import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Color from '../config/Colors'

const PriceView = ({ price, customStyle, currency }) => {
  return <Text style={[styles.priceText, customStyle]}>{currency + price.toString()}</Text>
}

const styles = StyleSheet.create({
  priceText: {
    color: Color.priceBlue,
    fontSize: 20,
    fontWeight: 'bold',
  },
})
export default PriceView
