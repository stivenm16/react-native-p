import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
    const {navigate} = navigation

    const goToSettings = () => {
        navigate("Settings")
    }
  return (
    <View>
      <Text>Estamos en el HomeScreen</Text>
      <Text>Estamos en el HomeScreen</Text>
      <Text>Estamos en el HomeScreen</Text>
      <Text>Estamos en el HomeScreen</Text>
      <Text>Estamos en el HomeScreen</Text>
      <Text>Estamos en el HomeScreen</Text>
      <Text>Estamos en el HomeScreen</Text>
      <Text>Estamos en el HomeScreen</Text>
      <Button onPress={goToSettings} title='Press me'></Button>
    </View>
  )
}