import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder='email'/>
      <TextInput placeholder='password'/>
      <Button title='send' onPress={() => console.log('enviado')}/>
      <Text>LoginForm</Text>
    </View>
  )
}