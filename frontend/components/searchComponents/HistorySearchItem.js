import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function HistorySearchItem(props) {
  return (
    <View style = {styles.hr_bottom}>
      <Text style = {[styles.p_10, styles.pt_15, styles.pb_15]}>{props.title}</Text>
    </View>
  )
}