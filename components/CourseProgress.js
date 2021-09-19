import React from 'react'
import { View, StyleSheet } from 'react-native'
import CourseVerticalInfo from './CourseCardVerticalInfo'
import CourseVerticalProgressInfo from './CourseVerticalProgressInfo'
import Color from '../config/Colors'

const CourseProgressCard = ({
  courseName,
  instructorName,
  tagName,
  image,
  progressPercent,
  progress,
  dueTime,
}) => {
  return (
    <View style={styles.courseContainer}>
      <CourseVerticalInfo
        courseName={courseName}
        instructorName={instructorName}
        tagName={tagName}
        image={image}
      />
      <CourseVerticalProgressInfo
        progressPercent={progressPercent}
        progress={progress}
        dueTime={dueTime}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  courseContainer: {
    width: 370,
    height: 200,
    borderRadius: 10,
    backgroundColor: Color.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})

export default CourseProgressCard
