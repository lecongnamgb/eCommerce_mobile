import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../styles'
import NotiListItem from './NotiListItem'
import NotiHeader from './Header'
import BottomNavigator from '../Navigator/BottomNavigator'

export default function NotiMain() {
  return (
    <SafeAreaView style = {[styles.bg_white, {height: '100%'}]}>
        <NotiHeader title = {"Thông báo"} containCart = {true}/>
        <NotiListItem/>
        <BottomNavigator 
            height = {90}
            currentActive = {"Noti"}
        />
    </SafeAreaView>
  )
}