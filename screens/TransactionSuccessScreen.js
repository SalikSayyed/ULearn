import React from 'react'
import { View, StyleSheet } from 'react-native'
import TransactionPage from '../components/TransactionSuccessGreeting'
import Button from '../components/Button'
// import Color from './config/Colors'
import LinkButton from '../components/LinkButton'
import Box from '../components/Box'
import xml from '../assets/bloom'

const Transaction = ({ navigation }) => {
  const [fullScreen, changeFullScreen] = React.useState(false)
  return (
    <View style={styles.screenStyle}>
      <Box svg={xml} customBoxStyle={styles.box} />

      {/* <Button tagName="Go to my course" onPress={()=>console.log("Clicked!")} /> */}
      <TransactionPage />

      <Button
        tagName="Go to my course"
        onPress={() => {
          navigation.setOptions({ tabBarStyle: { height: fullScreen ? 0 : 66 } })
          changeFullScreen(!fullScreen)
        }}
        customeStyle={styles.buttonStyle}
      />
      {/* <Button tagName="Go to my course" onPress={()=>console.log("Clicked!")} /> */}
      <LinkButton
        tagName="Back to Home"
        onPress={() => {
          navigation.navigate('Explore')
        }}
      />
    </View>
  )
}

export default Transaction

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginHorizontal: 10,
  },
  box: {
    transform: [{ rotateY: '30deg' }],
  },
})
