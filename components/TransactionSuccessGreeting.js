import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Color from '../config/Colors'

const TransactionPage = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.title}>Transaction Success 🎉</Text>
      <Text style={styles.text}>Congratulation! Your transaction is successful,</Text>
      <Text style={styles.text1}>you can start your course now</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    // paddingVertical: 5,
    // color: '#20232a',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  text: {
    color: Color.textGrey,
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  text1: {
    color: Color.textGrey,
    textAlign: 'center',
    fontSize: 18,
  },
  containerStyle: {
    marginBottom: 60,
  },
})

export default TransactionPage
