import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import PopularCourseList from '../components/popularCourseList'
import Color from '../config/Colors'

export default function Home({ navigation }) {
  return (
    <View style={styles.screenStyle}>
      <View style={styles.containerStyle}>
        <PopularCourseList />
        <View style={styles.buttonView}>
          <Button title="INSTRUCTIONS" onPress={() => navigation.push('Notifications')} />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonView: {
    width: 120,
    height: 35,
    backgroundColor: Color.blue,
    fontSize: 40,
  },
  screenStyle: {
    backgroundColor: Color.white,
    flex: 1,
    justifyContent: 'center',
  },
  containerStyle: {
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
