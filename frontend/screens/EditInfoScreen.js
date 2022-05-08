import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/notiComponents/Header'
import styles from '../components/styles'
import UserOptionTag from '../components/userComponents/UserOptionTag'
import SeparateView from '../components/userComponents/SeparateView'
import { useNavigation } from '@react-navigation/native'

export default function EditInfoScreen() {
    const navigation = useNavigation();
    const urlImage = "https://picsum.photos/200";
  return (
    <SafeAreaView style = {[{backgroundColor: '#fff', height: '100%'}]}>
        <Header 
            title = {"Sửa hồ sơ"}
            canBack = {true}
        />
        <View style = {[{height: 150, backgroundColor: '#99ddff'}, styles.alignCenterItem, styles.alignCenterItemVertically]}>
            <Image
                source = {require('../assets/icon/user.png')}
                style = {styles.img_64x64}
            />
        </View>
        <UserOptionTag 
            title = {"Tên"} 
            description = {"Lê Công Nam"} 
            containIcon = {false}
        />
        <UserOptionTag 
            title = {"Tên đăng nhập"} 
            description = {"lecongnam2001"}
            containIcon = {false}
            containRightArrow = {false}
        />
        <SeparateView/>
        <UserOptionTag 
            title = {"Giới tính"} 
            description = {"Nam"}
            containIcon = {false}
        />
         <UserOptionTag 
            title = {"Ngày sinh"} 
            description = {null}
            containIcon = {false}
        />
        <UserOptionTag 
            title = {"Số điện thoại"} 
            description = {null}
            containIcon = {false}
        />
        <UserOptionTag 
            title = {"Địa chỉ"} 
            description = {null}
            containIcon = {false}
        />
        <SeparateView/>
        <TouchableOpacity
            style = {styles.hr_bottom}
        >
            <UserOptionTag 
                title = {"Thay đổi mật khẩu"} 
                containIcon = {false}
            />
        </TouchableOpacity>
        <TouchableOpacity
            style = {[styles.alignCenterItem, 
                styles.alignCenterItemVertically, 
                {height: 40, backgroundColor: '#ff6600', margin: 20}]}
            onPress = {() => {

            }}
        >
            <View>
                <Text style = {{fontSize: 16, color: '#fff'}}>Đăng xuất</Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}