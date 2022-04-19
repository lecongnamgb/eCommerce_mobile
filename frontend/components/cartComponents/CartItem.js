import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function CartItem() {
  return (
    <View style = {[styles.flex_row, styles.ml_25, styles.mt_10, styles.mb_10]}>
        <View>
            <Image 
                source = {require('../../assets/icon/T_shirt1.png')}
                style = {styles.img_100x100}
            />
        </View>
        <View>
            <View style = {styles.ml_15}>
                <Text numberOfLines={1} style = {[{width: '60%', fontSize: 16}]}>
                    Quần jean short chốt live 19k ádfjaisdfjaisdjfafafkaosdfk
                </Text>
                <Text style = {{fontWeight: 'bold', color: 'red', fontSize: 16}}>
                    19.000đ
                </Text>
            </View>
        </View>
    </View>
  )
}