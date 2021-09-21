import 'react-native-gesture-handler'
import React from 'react'
import ScreenArea from './components/ScreenArea'
import Color from './config/Colors'
import Navigation from './navigation/MainStackNavigation'
import { NavigationContainer } from '@react-navigation/native'
export default function App() {
  return (
    <ScreenArea screenColor={Color.lightGrey}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ScreenArea>
  )
}
