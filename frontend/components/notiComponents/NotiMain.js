import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../styles'
import NotiListItem from './NotiListItem'
import NotiHeader from './NotiHeader'

export default function NotiMain() {
  return (
    <SafeAreaView style = {styles.bg_white}>
        <NotiHeader/>
        <NotiListItem/>
    </SafeAreaView>
  )
}