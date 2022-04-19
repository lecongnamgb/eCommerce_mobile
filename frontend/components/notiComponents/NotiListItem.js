import { View, Text } from 'react-native'
import React from 'react'
import NotiItem from './NotiItem'
import styles from '../styles'

export default function NotiListItem() {
  return (
    <View>
        <Text style = {[styles.ml_10, styles.mt_10, styles.mb_10]}>Cập nhật đơn hàng</Text>
      <NotiItem/>
    </View>
  )
}