import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

import Color from '../config/Colors'
import AppText from './AppText'
import InstructorName from './InstructorName'
import PriceView from './PriceView'
import TagShow from './TagShow'
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
    width: 180,
    height: 210,
    backgroundColor: Color.white,
    borderRadius: 25,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  imageStyle: {
    width: 180,
    position: 'relative',
    height: 130,
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
    color: Color.black,
  },
  tag: {
    transform: [{ translateY: 3 }],
  },
}
export default CourseCard
