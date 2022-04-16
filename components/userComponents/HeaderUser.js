import React from 'react';
import {Text, 
        Dimensions,
        Image, 
        View,
        ScrollView,
        SafeAreaView,
        StyleSheet} from 'react-native';
import UserImage from '../../assets/icon/user.png'
import styles from '../styles'

export default function HeaderUser() {
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {[styles.mainHeader, styles.mt_20]}>
            <Image source = {UserImage}
                    style = {styles.userImage}/>
            <View style = {styles.ml_10}>
                <Text style = {[styles.userName, styles.bold]}>Lê Công Nam</Text>
                <Text style = {styles.bottom}>
                    Người theo dõi <Text style = {styles.bold}>0 </Text>Đang theo dõi <Text style = {styles.bold}>0</Text>
                </Text>
            </View>
        </View>
    </SafeAreaView>
  )
}