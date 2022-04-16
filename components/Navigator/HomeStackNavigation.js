import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BillStatus from '../userComponents/BillStatus';
import RecommendListItem from '../homeComponents/RecommendListItem'

const Stack = createStackNavigator();
export default function HomeStackNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name = {"Home"}
            screen = {BillStatus}
        />
    </Stack.Navigator>
  )
}