import 'react-native'
import React from 'react'
import CourseCard from '../components/CourseCard'
import renderer from 'react-test-renderer'
import PopularCourseList from '../components/popularCourseList'

it('Course Card Rendering Correctly', () => {
  renderer.create(
    <CourseCard
      courseName="blabla"
      image={require('../assets/index1_lot1_cat1.png')}
      instructorName="blabla"
      price={250}
    />
  )
})
it('Popular Course List Rendering Correctly', () => {
  renderer.create(<PopularCourseList />)
})
