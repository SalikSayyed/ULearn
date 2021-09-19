import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

import Color from '../config/Colors'

export default function Base({ screenColor }) {
  const list = ['CARD 1', 'CARD 2', 'CARD 3']
  //notice I didnt use ';' So u also never use ";"
  const bgColor = ['yellow', 'orange', 'cyan']
  //bgColor is in camelCase.. everything which is not a component Like Base()
  //        should be in camelCase
  return (
    <View style={[styles.container, { backgroundColor: screenColor }]}>
      <Text>Hello!!</Text>
      <ScrollView>
        {list.map((element, index) => {
          return (
            <View key={index} style={[styles.cardComponent, { backgroundColor: bgColor[index] }]}>
              <Text style={styles.cardText}>{element}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  cardComponent: {
    width: 300,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.grey,
    borderWidth: 5,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardText: {
    fontSize: 25,
    color: Color.black,
  },
  container: {
    flex: 1,
    backgroundColor: Color.white,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})
