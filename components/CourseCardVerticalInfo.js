import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from './AppText'
import InstructorName from './InstructorName'
import TagShow from './TagShow'
import Color from '../config/Colors'
import PriceView from './PriceView'
import currency from '../config/CurrencySymbols'

export default function CourseVerticalInfo({ image, instructorName, courseName, tagName }) {
  return (
    <View style={styles.mainContainer}>
      <Image source={image} style={styles.imageContainer} />

      <View style={styles.infoContainer}>
        <AppText text={courseName} customStyle={styles.courseText} />
        <InstructorName text={instructorName} />
        <View style={styles.labelContainer}>
          <PriceView price="25" currency={currency.DOLLAR_SIGN} customStyle={styles.priceStyle} />
          <TagShow
            backgroundColor={Color.shadyGreenishBlue}
            textColor={Color.tabBlue}
            tagName={tagName}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  courseText: {
    fontWeight: '700',
    paddingTop: 5,
  },
  mainContainer: {
    width: 360,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 10,
    paddingHorizontal: 20,
    resizeMode: 'stretch',
  },
  infoContainer: {
    width: 260,
    height: 90,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  priceStyle: {
    fontSize: 16,
  },
  labelContainer: {
    flexDirection: 'row',
    width: 250,
  },
})
