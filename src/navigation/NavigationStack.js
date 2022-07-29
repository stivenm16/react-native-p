import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function NavigationStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Settings' component={SettingsScreen}/>
        </Stack.Navigator>   
    ) 
}