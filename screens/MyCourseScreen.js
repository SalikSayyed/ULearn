import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CourseProgressCard from '../components/CourseProgress'
import ShiftButton from '../components/ShiftButton'
import Color from '../config/Colors'
const MyCourse = () => {
  const [selected, changeSelected] = React.useState(0)
  return (
    <View style={styles.myCourseScreen}>
      <Text>My Course</Text>
      <ShiftButton
        activeColor={Color.tabBlue}
        inActiveColor={Color.lightGrey}
        selectorWidth={350}
        elementList={['Ongoing', 'Completed']}
        changeSelected={changeSelected}
        selected={selected}
      />
      <CourseProgressCard
        courseName="Daniel Daniels course"
        instructorName="Daniel Instructor"
        tagName="Label"
        image={require('../assets/index1_lot1_cat1.png')}
        progress="20/29"
        dueTime="November 20, 2021"
        progressPercent={0.73}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  myCourseScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MyCourse
