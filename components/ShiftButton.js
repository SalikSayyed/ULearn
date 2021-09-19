import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'
import Color from '../config/Colors'

export default function ShiftButton({
  selected,
  changeSelected,
  activeColor,
  inActiveColor,
  elementList,
  selectorWidth,
}) {
  const list = elementList
  const n = list.length
  const width = selectorWidth
  return (
    <View style={styles.shiftButtonContainer}>
      {list.map((v, index) => {
        return (
          <TouchableOpacity key={v} onPress={() => changeSelected(index)}>
            <View
              style={[
                styles.shiftButtonMinorContainer,
                { width: width * (1 / n) },
                { backgroundColor: selected === index ? activeColor : inActiveColor },
              ]}
            >
              <AppText
                text={v}
                customStyle={[
                  styles.textStyle,
                  { color: selected === index ? Color.white : Color.black },
                ]}
              />
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  shiftButtonContainer: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Color.lightGrey,
    marginBottom: 10,
    borderRadius: 10,
  },
  shiftButtonMinorContainer: {
    height: 35,
    borderRadius: 10,
    backgroundColor: Color.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
