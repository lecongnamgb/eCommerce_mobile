import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import styles from '../styles'
import SeparateView from '../userComponents/SeparateView'

const {width} = Dimensions.get('window')

export default function NotiItem() {
  return (
    <View>

        <View style = {[styles.flex_row, styles.bg_white, {borderTopWidth: 1, borderTopColor: '#ccc'}]}>
            <Image 
                source={require('../../assets/icon/ao123.png')}
                style = {{width: 60, height: 60, resizeMode: 'contain'}}
            />
            <View style = {{width: width - 60}}>
                <Text style ={[styles.p_5]}>Đang vận chuyển</Text>
                <Text style = {[styles.p_5, {color: '#808080'}]}>
                    Đơn hàng 
                    <Text style = {{color: '#00bfff'}}> abcxyz </Text>
                    đã được xác nhận. Vui lòng kiểm tra thời gian nhận hàng dự kiện trong phần chi tiết đơn hàng nhé!
                </Text>
                <Text style = {[styles.p_5, {color: '#a9a9a9', fontSize: 12}]}>
                    08:17 16-03-2022
                </Text>
            </View>

        </View>
    </View>
  )
}