import { View, Text } from 'react-native'
import React from 'react'
import SeparateView from '../userComponents/SeparateView'
import styles from '../styles'
import CartAndConversation from '../homeComponents/CartAndConversation'

export default function NotiHeader() {
  return (
      <View>
        <View style = {[styles.bg_white]}>
            <Text style = {[{textAlign: 'center', fontSize: 20}, styles.mb_15, styles.mt_15]}>Thông báo</Text>
            <View style = {{position: 'absolute', right: 15}}>
                <CartAndConversation/>            
            </View>
        </View>
        <SeparateView/>
      </View>
  )
}