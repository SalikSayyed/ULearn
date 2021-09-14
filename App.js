import 'react-native-gesture-handler'
import React from 'react'
import ScreenArea from './components/ScreenArea'
import Color from './config/Colors'
import LandingScreen from './navigation/BottomTabNavigation'
export default function App() {
  return (
    <ScreenArea screenColor={Color.lightGrey}>
      <LandingScreen />
    </ScreenArea>
  )
}
