import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function CartAndConversation() {
  return (
    <View style = {[styles.flex_row, styles.mt_10, styles.ml_10]}>
      <Image 
        source = {require('../../assets/icon/cart.png')}
        style = {[styles.img_24x24, styles.m_5, styles.ml_10]}
    />
    <Image
        source = {require('../../assets/icon/text_message.png')}
        style = {[styles.img_24x24, styles.m_5, styles.ml_10]}
    />
    </View>
  )
}