import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RecommendListItem from '../homeComponents/RecommendListItem'
import BillStatus from '../userComponents/BillStatus'
import SearchScreen from '../../screens/SearchScreen'
import LogInScreen from '../../screens/LogInScreen'
import CartScreen from '../../screens/CartScreen'

import ResultSearchScreen from '../../screens/ResultSearchScreen'
import Product from '../../screens/Product'
import EvaluationScreen from '../../screens/EvaluationScreen'
import NotiMain from '../notiComponents/NotiMain'
import MainUserScreen from '../userComponents/MainUserScreen'
import SignInScreen from '../../screens/SignInScreen'
import EditInfoScreen from '../../screens/EditInfoScreen'

const Stack = createStackNavigator();
export default function HomeStackNavigation() {
  return (
    <Stack.Navigator
    >
    <Stack.Screen
        name = {"Home"}
        component = {RecommendListItem}
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
            name = {"Product"}
            component= {Product}
            options = {
                {
                    headerShown: false,
                }
            }
        />
        <Stack.Screen
            name = {"Evaluation"}
            component= {EvaluationScreen}
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
         <Stack.Screen
            name = {"NotiMain"}
            component= {NotiMain}

            options = {
                {
                    headerShown: false,
                
                }
            }
        />
        <Stack.Screen
            name = {"User"}
            component= {MainUserScreen}

            options = {
                {
                    headerShown: false,
                
                }
            }
        />
          <Stack.Screen
            name = {"SignIn"}
            component = {SignInScreen}
            options= {
                {
                    headerShown: false
                }
            }
        />
        <Stack.Screen
            name = {"EditInfo"}
            component = {EditInfoScreen}
            options= {
                {
                    headerShown: false
                }
            }
        />
    </Stack.Navigator>
  )
}