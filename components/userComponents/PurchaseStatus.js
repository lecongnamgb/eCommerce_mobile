import React from 'react';
import {Text, View, Image} from 'react-native'
import styles from '../styles';
import StateItem from './StateItem';
import pendingIcon from '../../assets/icon/pendingConfirm.png';
import waitingIcon from '../../assets/icon/waiting.png';
import shippingIcon from '../../assets/icon/shipping.png';
import reviewIcon from '../../assets/icon/review.png'

export default function PurchaseStatus() {
  return (
    <View style = {[styles.borderTop, styles.flex_row, styles.width_100]} >
        <StateItem 
            sourceIcon = {pendingIcon}
            title = {"Chờ xác nhận"}
        />
        <StateItem
            sourceIcon = {waitingIcon}
            title = {"Chờ lấy hàng"}
            />
        <StateItem
            sourceIcon = {shippingIcon}
            title = {"Đang giao"}
            />
        <StateItem
            sourceIcon = {reviewIcon}
            title = {"Đánh giá"}
            />
    </View>
  )
}
