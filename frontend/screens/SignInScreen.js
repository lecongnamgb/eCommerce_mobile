import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Header from '../components/notiComponents/Header'
import styles from '../components/styles'
import NormalField from '../components/checkInComponents/NormalField'
import PasswordField from '../components/checkInComponents/PasswordField'

export default function SignInScreen() {
  return (
    <SafeAreaView style = {{backgroundColor: '#fff', height: '100%'}}>
        <Header title = "Đăng ký" canBack = {true}/>
        <View style = {[styles.alignCenterItem, styles.alignCenterItemVertically, {marginTop: 40, marginBottom: 40}]}>
            <Image 
                source = {require('../assets/icon/main_logo.png')}
                style = {styles.img_80x80}
            />
      </View>
      <View style = {{marginLeft: '10%', marginRight: '10%'}}>
        <NormalField sourceIcon = {require('../assets/icon/mail.png')} plhdTitle = "Email" focus = {true}/>
        <View style = {{height: 20}}/>
        <NormalField sourceIcon = {require('../assets/icon/account_icon.png')} plhdTitle = "Tài khoản"/>
        <PasswordField plhdTitle = "Mật khẩu"/>
        <PasswordField plhdTitle = "Nhập lại mật khẩu"/>
      </View>
    </SafeAreaView>
  )
}