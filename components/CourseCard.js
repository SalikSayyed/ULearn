import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

import Color from '../config/Colors'
import AppText from './appText'
import InstructorName from './instructorName'
import PriceView from './priceView'
import TagShow from './tagShow'
const CourseCard = ({ courseName, instructorName, price, image }) => {
  return (
    <TouchableOpacity onPress={() => console.log('Clicked!!')}>
      <View style={styles.cardStyle}>
        <Image source={image} style={styles.imageStyle} />
        <View style={styles.bottomCardStyle}>
          <AppText text={courseName} />
          <InstructorName text={instructorName} />
          <View style={styles.infoSect}>
            <PriceView price={price} currency="$" customStyle={styles.priceStyle} />
            <TagShow backgroundColor={Color.backgroundRed} textColor={Color.textRed} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  cardStyle: {
    width: 250,
    height: 300,
    backgroundColor: Color.white,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  imageStyle: {
    width: 250,
    height: 200,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  bottomCardStyle: {
    flexDirection: 'column',
    paddingLeft: 10,
    justifyContent: 'space-evenly',
  },
  infoSect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceStyle: {
    fontSize: 15,
    color: Color.grey,
  },
}
export default CourseCard
