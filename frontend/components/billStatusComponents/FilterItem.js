import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function FilterItem(props) {
  return (
    <View style = {[
        styles.pt_10,
        styles.pb_10,
        styles.pl_20
    ]}>
      <Text>{props.title}</Text>
    </View>
  )
}