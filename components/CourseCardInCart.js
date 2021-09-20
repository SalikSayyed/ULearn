import React from 'react'
import { View, StyleSheet } from 'react-native'
import CourseCardVerticalInfo from './CourseCardVerticalInfo'
import CheckBox from './CheckBox'
import Color from '../config/Colors'
import AppText from './AppText'
import Button from './Button'
export default function CourseCardInCart({ navigation }) {
  return (
    <>
      <View style={styles.InCartItem}>
        <View style={styles.insideContainer}>
          <CheckBox state={1} />
          <CourseCardVerticalInfo
            courseName="Awesome Blender Course"
            image={require('../assets/index1_lot1_cat1.png')}
            instructorName="Awesome Instructor"
            tagName="Label"
          />
        </View>
        <View style={styles.linkContainer}>
          <AppText text="Remove" style={styles.remove} />
          <AppText text="Move to WishList" style={styles.addToWishList} />
        </View>
      </View>
      <Button
        buttonColor={Color.buttonBlue}
        tagName="Transaction Screen"
        onPress={() => navigation.push('Profile')}
      />
    </>
  )
}

const styles = StyleSheet.create({
  InCartItem: {
    flexDirection: 'column',
    height: 150,
    width: 350,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  remove: {
    fontWeight: 'bold',
    color: Color.textRed,
  },
  addToWishList: {
    fontWeight: 'bold',
    color: Color.buttonBlue,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginLeft: 30,
  },
  insideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
  },
})
