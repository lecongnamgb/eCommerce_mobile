
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserScreen from '../../screens/UserScreen';
import HomeScreen from '../../screens/HomeScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
        <Tab.Navigator
        >
            <Tab.Screen 
                name = {"Home"}
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
  )
                }}
            />
            <Tab.Screen 
                name="Thông báo" 
                component={NotificationScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
  )
                }}
            />
            <Tab.Screen 
                name="Tôi" 
                component={UserScreen}
                options={{
                    tabBarLabel: 'Tôi',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
  ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
  )
}