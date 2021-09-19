import React from 'react'
import { View, StyleSheet } from 'react-native'

import TransactionPage from './screens/TransactionPage'
import Button from './components/Button'
// import Color from './config/Colors'
import LinkButton from './components/LinkButton'
import Box from './components/Box'

const App = () => {
  return (
    <View style={styles.screenStyle}>
      <Box />

      {/* <Button tagName="Go to my course" onPress={()=>console.log("Clicked!")} /> */}
      <TransactionPage />

      <Button tagName="Go to my course" onPress={() => console.log('Clicked!')} />
      {/* <Button tagName="Go to my course" onPress={()=>console.log("Clicked!")} /> */}
      <LinkButton tagName="Back to Home" onPress={() => console.log('Clicked')} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
