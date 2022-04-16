import { View, Text, Image } from 'react-native'
import React from 'react';
import styles from '../styles';

export default function StateItem(props) {
  return (
    <View style = {[styles.alignCenterItem, styles.pr_5,  styles.pl_5, styles.mb_10, styles.width_25]}>
        <View style = {[styles.pb_15, styles.pt_15]}>
            <Image 
                source = {props.sourceIcon}
                style = {[styles.icon_tag]}
            />
        </View>
        <Text style = {{fontSize: 12}}>{props.title}</Text>
    </View>
  )
}