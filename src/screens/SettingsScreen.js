import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingsScreen({navigation}) {
    const {navigate} = navigation
    const goToPage = (pageName) => {
        navigate(pageName)
    }
  return (
    <View>
      <Text>Estamos en tab</Text>
      <Text>Estamos en tab</Text>
      <Text>Estamos en tab</Text>
      <Text>Estamos en tab</Text>
      <Text>Estamos en tab</Text>
      <Text>Estamos en tab</Text>
      <Button onPress={() => goToPage('Home')} title='Press me'></Button>
    </View>
  )
}