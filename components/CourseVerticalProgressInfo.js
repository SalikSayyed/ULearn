import Color from '../config/Colors'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from './AppText'

export default function CourseVerticalProgressInfo({ progressPercent, progress, dueTime }) {
  return (
    <View style={styles.stackContainer}>
      <View style={styles.progressStats}>
        <View style={styles.minuteColumn1}>
          <AppText text="Progress" style={styles.progressHead} />
          <AppText text={progress} />
        </View>
        <View style={styles.minuteColumn2}>
          <AppText text="Due Time" style={styles.progressHead} />
          <AppText text={dueTime} />
        </View>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.insideProgressBar, { width: progressPercent * 350 }]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  stackContainer: {
    width: 360,
    height: 80,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  progressStats: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressHead: {
    color: Color.grey,
  },
  progressBar: {
    width: 350,
    height: 8,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: Color.lightlightGrey,
  },
  minuteColumn1: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 130,
  },
  minuteColumn2: {
    width: 150,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  insideProgressBar: {
    height: 8,
    borderRadius: 10,
    backgroundColor: Color.lightGreenishBlue,
  },
})
