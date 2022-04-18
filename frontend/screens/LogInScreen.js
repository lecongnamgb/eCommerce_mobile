import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react'
import styles from '../components/styles'
import { useNavigation } from '@react-navigation/native'
import {useState} from 'react'
import close_eye_icon from '../assets/icon/close_eye.png'
import open_eye_icon from '../assets/icon/open_eye.png'

export default function LogInScreen() {
    const [showPassword, setShowpassword] = useState(false)
    const navigation = useNavigation()

  return (
    <SafeAreaView>
        <View style = {[styles.flex_row, {width: '100%', borderBottomColor: '#f2f2f2', borderBottomWidth: 1}, styles.p_15]}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('User')
            }} >
                <Image 
                    source = {require('../assets/icon/back_arrow.png')}
                    style = {styles.img_32x32}
                />
            </TouchableOpacity>
                <Text style = {{fontSize: 23, marginLeft: '28%'}}>Đăng nhập</Text>
        </View>
      <View style = {[styles.alignCenterItem, styles.alignCenterItemVertically, {marginTop: 40, marginBottom: 40}]}>
        <Image 
            source = {require('../assets/icon/main_logo.png')}
            style = {styles.img_80x80}
        />
      </View>
      <View>
          <View style = {[{margin: 25}]}>
              <View style = {[styles.flex_row, styles.pb_10, styles.hr_bottom]}>

                <Image 
                    source = {require('../assets/icon/account_icon.png')}
                    style = {[styles.img_24x24, styles.ml_15, styles.mr_15]}
                />
                <TextInput
                    style = {[{width: '90%', fontSize: 16, height: 30}]}
                    placeholder = {"Nhập tên đăng nhập"}
                    autoFocus = {true}

                />
              </View>
              <View style = {[styles.flex_row, styles.pb_10, styles.hr_bottom, styles.mt_15]}>

                <Image 
                    source = {require('../assets/icon/padlock.png')}
                    style = {[styles.img_24x24, styles.ml_15, styles.mr_15]}
                />
                <View style = {[{width: '100%'}, styles.flex_row]}>

                    <TextInput
                        style = {[{fontSize: 16, height: 30, width: '70%'}]}
                        placeholder = {"Mật khẩu"}
                        secureTextEntry={showPassword ? false : true}
                    />
                    <TouchableOpacity
                        style = {[styles.pl_15, styles.pr_15]}
                        activeOpacity = {1}
                        onPress = {() => {
                            showPassword ? setShowpassword(false) : setShowpassword (true)
                        }}
                    >
                        <Image 
                            source = {showPassword ? open_eye_icon : close_eye_icon}
                            style = {[styles.img_24x24, {top: 3}]}
                        />
                    </TouchableOpacity >
                </View>
              </View>
          </View>
          <TouchableOpacity style = {[{backgroundColor: '#ff8000', height: 40, marginLeft: 25, marginRight: 25}, styles.alignCenterItemVertically]}>
            <Text style = {{textAlign: 'center', color: '#fff', fontSize: 18}}>Đăng nhập</Text>
          </TouchableOpacity>
          <View style = {[styles.ml_25, styles.mr_25, styles.mt_20, styles.flex_row, {justifyContent: 'flex-end'}]}>
            <TouchableOpacity style = {{alignSelf: 'flex-start', width: '70%'}}>
                <Text style = {[styles.color_blue, {fontSize: 15}]}>Đăng ký</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{alignSelf: 'flex-end'}}>
                <Text style = {[styles.color_blue, {fontSize: 15}]}>Quên mật khẩu</Text>
            </TouchableOpacity>

          </View>
      </View>
    </SafeAreaView>
  )
}