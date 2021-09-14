import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CourseListScreen from '../screens/ExploreScreen'
import SampleScreen from '../screens/SampleScreen'

const Stack = createStackNavigator()

export default function Home() {
  return (
    <Stack.Navigator
      initialRouteName="HOME"
      cardShadowEnabled={false}
      animationEnabled={true}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HOME" component={CourseListScreen} />
      <Stack.Screen name="Notifications" component={SampleScreen} />
      <Stack.Screen name="Profile" component={SampleScreen} />
      <Stack.Screen name="Settings" component={CourseListScreen} />
    </Stack.Navigator>
  )
}
