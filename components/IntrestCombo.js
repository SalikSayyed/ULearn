import 'react-native-gesture-handler'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
//import LandingScreen from './navigation/BottomTabNavigation'
import IntrestSelection from './IntrestsSelection'
import interestData from '../config/IntrestData'

export default function InterestCombo() {
  return (
    <View style={styles.listStyle}>
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={styles.contentStyle}
        style={styles.flatStyle}
        numColumns={3}
        data={interestData}
        renderItem={({ item }) => {
          return <IntrestSelection label={item.label} textIcon={item.textIcon} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatStyle: {
    alignContent: 'center',
  },
  contentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
