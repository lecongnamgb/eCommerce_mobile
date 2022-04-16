import { View, Text, Image } from 'react-native'
import React from 'react';
import moreIcon from '../../assets/icon/right_circular_arrow.png';
import styles from '../styles'

export default function MoreProductItem() {
  return (
    <View style = {[styles.productItem, styles.full_border, styles.alignCenterItem, styles.ml_5, styles.mr_5, styles.alignCenterItemVertically]}>
        <Image 
            source = {moreIcon}
            style = {{height: 48, width: 48}}
        />
        <Text style = {styles.pt_10}>Xem thêm</Text>
    </View>
  )
}