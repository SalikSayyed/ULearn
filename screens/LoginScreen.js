import React from 'react'
import Input from '../components/InputComponent'
import Button from '../components/Button'
const LoginScreen = ({ navigation }) => {
  const [text, changeText] = React.useState(' ')
  const Textplaceholder = 'Input Here'
  return (
    <>
      <Input
        iconName="mail-outline"
        hide={true}
        value={text}
        onChangeValue={changeText}
        placeholder={Textplaceholder}
      />
      <Button tagName="login without check" onPress={() => navigation.push('PickFavourite')} />
    </>
  )
}

export default LoginScreen
