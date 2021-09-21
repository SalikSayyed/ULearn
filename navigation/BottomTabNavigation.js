import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OctIcons from 'react-native-vector-icons/Ionicons'
import ExploreScreen from '../screens/ExploreScreen'
import MyCourseScreen from '../screens/MyCourseScreen'
import TransactionSuccesScreen from '../screens/TransactionSuccessScreen'
import CourseSearchResult from '../screens/CourseSearchResult'
import Color from '../config/Colors'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Explore"
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: Color.tabBlue,
          tabBarInactiveTintColor: Color.tabGrey,
          headerShown: false,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIconStyle: styles.tabBarIconStyle,
        }}
      >
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <OctIcons
                name={focused ? 'compass' : 'compass-outline'}
                color={color}
                size={focused ? 35 : 30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="My Courses"
          component={MyCourseScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <OctIcons
                name={focused ? 'play-circle' : 'play-circle-outline'}
                color={color}
                size={focused ? 35 : 30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={CourseSearchResult}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <OctIcons
                name={focused ? 'heart' : 'heart-outline'}
                color={color}
                size={focused ? 35 : 30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={TransactionSuccesScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <OctIcons
                name={focused ? 'person' : 'person-outline'}
                color={color}
                size={focused ? 35 : 30}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  )
}
const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    height: 66,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  tabBarIconStyle: {
    fontSize: 40,
  },
  tabBarLabelStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    paddingBottom: 5,
  },
})
