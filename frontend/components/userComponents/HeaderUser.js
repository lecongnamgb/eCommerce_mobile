import React from 'react';
import {Text, 
        Image, 
        View,
        SafeAreaView,
        TouchableOpacity
        } from 'react-native';
import UserImage from '../../assets/icon/user.png'
import styles from '../styles'
import SeparateView from './SeparateView';
import { useNavigation } from '@react-navigation/native';

export default function HeaderUser() {
    const navigation = useNavigation()
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {[styles.mainHeader, styles.mt_20]}>
            <TouchableOpacity 
            onPress={() => {
                navigation.navigate('LogIn')
            }}>
                <Image source = {UserImage}
                        style = {styles.userImage}/>
            </TouchableOpacity>
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