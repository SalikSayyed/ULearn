import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import CourseData from '../config/PopularCourseData'
import CourseCard from '../components/CourseCardSmall'

export default function CourseSerachResult() {
  const listId = [1, 2, 3, 4]
  const data = CourseData.filter((v) => listId.indexOf(v.index) !== -1)
  return (
    <FlatList
      data={data}
      numColumns={2}
      contentContainerStyle={styles.containerStyle}
      renderItem={() => (
        <CourseCard
          courseName="Awesome Blender Course"
          image={require('../assets/index1_lot1_cat1.png')}
          instructorName="Awsome Instructor"
          price={200}
        />
      )}
    />
  )
}
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignSelf: 'center',
  },
})
