import React from 'react'
import { FlatList } from 'react-native'

import PopularCourseData from '../config/popularCourseData'
import CourseCard from './CourseCard'
const PopularCourseList = ({ ...otherProps }) => (
  <FlatList
    data={PopularCourseData}
    {...otherProps}
    renderItem={({ item }) => (
      <CourseCard
        image={require('../assets/index1_lot1_cat1.png')}
        courseName={item.coursename}
        instructorName={item.teacher}
        price={item.price}
      />
    )}
  />
)
export default PopularCourseList
