import React from 'react'
import { View, StyleSheet } from 'react-native'
import PopularList from './components/popularCourseList'
import Newcomponent from './components/newComponent'
export default function App() {
  return (
    // <View style={styles.mainScreen}>
    //   <View style={styles.placer}>
      <Newcomponent screenColor='blue' />
      //  {/* <PopularList horizontal={true} showsHorizontalScrollIndicator={false} /> */}
    //   </View>
    // </View>
  )
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  placer: {
    marginTop: 20,
  },
})
