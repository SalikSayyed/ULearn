import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

export default function App(props) {
  return (
    <SafeAreaView style={[styles.screenStyle, { backgroundColor: props.screenColor }]}>
      {props.children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
  },
})
