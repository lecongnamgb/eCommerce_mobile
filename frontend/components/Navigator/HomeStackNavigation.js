import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RecommendListItem from '../homeComponents/RecommendListItem'
import BillStatus from '../userComponents/BillStatus'
import SearchScreen from '../../screens/SearchScreen'
import LogInScreen from '../../screens/LogInScreen'
import CartScreen from '../../screens/CartScreen'
import BottomNavigation from './BottomNavigation'
import ResultSearchScreen from '../../screens/ResultSearchScreen'

const Stack = createStackNavigator();
export default function HomeStackNavigation() {
  return (
    <Stack.Navigator
    >
        <Stack.Screen
            name = {"MainHome"}
            component = {BottomNavigation}
            options={
                {
                    headerShown: false,
                }
            }
        />
        <Stack.Screen
            name = {"Cart"}
            component = {CartScreen}
            options={
                {
                    headerShown: false
                }
            }
        />
        <Stack.Screen
            name = {"Bill Status"}
            component = {BillStatus}
        />
        <Stack.Screen
            name = {"Search"}
            component= {SearchScreen}
            options = {
                {
                    headerShown: false,
                }
            }
        />
        <Stack.Screen
            name = {"resultSearch"}
            component= {ResultSearchScreen}
            options = {
                {
                    headerShown: false,
                }
            }
        />
         <Stack.Screen
            name = {"LogIn"}
            component= {LogInScreen}
            options = {
                {
                    headerShown: false,
                }
            }
        />
    </Stack.Navigator>
  )
}