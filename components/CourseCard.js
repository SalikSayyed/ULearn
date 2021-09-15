import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

import Color from '../config/Colors'
import AppText from './appText'
import InstructorName from './instructorName'
import PriceView from './priceView'
import TagShow from './tagShow'
import CurrencySymbol from '../config/CurrencySymbols'
const CourseCard = ({ courseName, instructorName, price, image }) => {
  return (
    <TouchableOpacity onPress={() => console.log('Clicked!!')}>
      <View style={styles.cardStyle}>
        <Image source={image} style={styles.imageStyle} />
        <View style={styles.bottomCardStyle}>
          <AppText text={courseName} customStyle={styles.courseName} />
          <InstructorName text={instructorName} />
          <View style={styles.infoSect}>
            <PriceView
              price={price}
              currency={CurrencySymbol.INDIAN_RUPEE_SIGN}
              customStyle={styles.priceStyle}
            />
            <View style={styles.tag}>
              <TagShow
                backgroundColor={Color.backgroundRed}
                textColor={Color.textRed}
                tagName="Best Seller"
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  cardStyle: {
    width: 260,
    height: 270,
    backgroundColor: Color.white,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  imageStyle: {
    width: 260,
    position: 'relative',
    height: 180,
    borderRadius: 20,
    resizeMode: 'stretch',
  },
  bottomCardStyle: {
    flexDirection: 'column',
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  infoSect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceStyle: {
    fontSize: 16,
    paddingTop: 5,
  },
  courseName: {
    fontWeight: 'bold',
    paddingTop: 5,
  },
  tag: {
    transform: [{ translateY: 3 }],
  },
}
export default CourseCard
