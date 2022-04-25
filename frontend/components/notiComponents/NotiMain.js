import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../styles'
import NotiListItem from './NotiListItem'
import NotiHeader from './Header'

export default function NotiMain() {
  return (
    <SafeAreaView style = {styles.bg_white}>
        <NotiHeader title = {"Thông báo"} containCart = {true}/>
        <NotiListItem/>
    </SafeAreaView>
  )
}