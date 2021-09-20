import React from 'react'
import Input from '../components/InputComponent'
const LoginScreen = ({}) => {
  const [text, changeText] = React.useState(' ')
  const Textplaceholder = 'Input Here'
  return (
    <Input
      iconName="mail-outline"
      hide={true}
      value={text}
      onChangeValue={changeText}
      placeholder={Textplaceholder}
    />
  )
}

export default LoginScreen
