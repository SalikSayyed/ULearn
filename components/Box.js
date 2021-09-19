import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Color from '../config/Colors'

export default class Box extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.text}>CONGRATULATIONS</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
    // padding: 5,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  box: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginLeft: 20,
    marginRight: 20,

    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: Color.yellow,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 40,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})
