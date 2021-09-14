import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OctIcons from 'react-native-vector-icons/Ionicons'
/* TESTING PURPOSE ONLY AFTER CHECKING RETURN TO THIS=>STATE*/
//import { View, StyleSheet } from 'react-native'
//import PopularList from './components/popularCourseList'
import SampleComponent from '../components/sampleComponent' /* requires screenColor='anycolor'*/
import SampleScreen from '../screens/SampleScreen'
import HomeScreen from './ExploreNavigation'
import IntrestSelector from '../components/intrestCombo'
import Color from '../config/Colors'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
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
          component={HomeScreen}
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
          component={SampleComponent}
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
          component={SampleScreen}
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
          component={IntrestSelector}
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
    </NavigationContainer>
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
