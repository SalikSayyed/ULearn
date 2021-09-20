import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CourseListScreen from '../screens/ExploreScreen'
import CourseCardInCart from '../components/CourseCardInCart'
import TransactionScreen from '../screens/Transaction'
import SampleScreen from '../screens/SampleScreen'

const Stack = createStackNavigator()

export default function Home() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      cardShadowEnabled={false}
      animationEnabled={true}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HOME" component={CourseCardInCart} />
      <Stack.Screen name="Instructions" component={SampleScreen} />
      <Stack.Screen name="Profile" component={TransactionScreen} />
      <Stack.Screen name="Settings" component={CourseListScreen} />
    </Stack.Navigator>
  )
}
