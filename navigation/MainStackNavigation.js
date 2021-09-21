import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CourseListScreen from '../screens/ExploreScreen'
import TransactionScreen from '../screens/TransactionSuccessScreen'
import LoginScreen from '../screens/LoginScreen'
import IntrestSelection from '../screens/PickFavouriteScreen'
import TabNavigator from '../navigation/BottomTabNavigation'

const Stack = createStackNavigator()

export default function Home() {
  return (
    <Stack.Navigator
      initialRouteName="CreateAccount"
      cardShadowEnabled={false}
      animationEnabled={true}
      screenOptions={{ headerShown: false, detachPreviousScreen: true }}
    >
      <Stack.Screen name="CreateAccount" component={LoginScreen} />
      <Stack.Screen name="PickFavourite" component={IntrestSelection} />
      <Stack.Screen name="SetNewPassword" component={TransactionScreen} />
      <Stack.Screen name="TransactionSuccess" component={CourseListScreen} />
      <Stack.Screen name="TransactionFail" component={CourseListScreen} />
      <Stack.Screen name="CourseSearchScreen" component={CourseListScreen} />
      <Stack.Screen name="MainTabScreen" component={TabNavigator} />
      <Stack.Screen name="MainVideoCourse" component={CourseListScreen} />
    </Stack.Navigator>
  )
}
