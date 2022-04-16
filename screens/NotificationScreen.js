import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../components/styles'
import SeparateView from '../components/userComponents/SeparateView'
import NotiListItem from '../components/notiComponents/NotiListItem'

export default function NotificationScreen() {
  return (
    <SafeAreaView>
        <View style = {[styles.flex_row, styles.bg_white, styles.p_15]}>
            <View>
                <Text>Cập nhật đơn hàng</Text>
            </View>
            <View style= {[styles.flex_row, styles.flex_end]}>
                <Text>Đọc tất cả</Text>
            </View>
        </View>
        <NotiListItem/>
    </SafeAreaView>
  )
}