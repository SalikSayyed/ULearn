import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import OctIcons from 'react-native-vector-icons/Ionicons'
import Color from '../config/Colors'
const InputComponent = ({ hide, iconName, value, onChangeValue, customStyle, ...otherProps }) => {
  const [protect, changeProtect] = React.useState(hide ? true : false)
  return (
    <View style={styles.containerStyle}>
      {iconName && <OctIcons name={iconName} size={20} color={Color.buttonBlue} />}
      <TextInput
        style={[styles.input, customStyle]}
        onChangeText={onChangeValue}
        value={value}
        secureTextEntry={protect}
        {...otherProps}
      />
      {hide && (
        <OctIcons
          name={protect ? 'eye' : 'eye-off'}
          size={20}
          style={styles.eyeIcon}
          onPress={() => changeProtect(!protect)}
          color={Color.buttonBlue}
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    width: 280,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    color: Color.black,
    fontSize: 15,
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Color.buttonBlue,
    borderRadius: 15,
    width: 360,
    height: 50,
  },
  eyeIcon: {
    marginRight: 20,
  },
})

export default InputComponent
