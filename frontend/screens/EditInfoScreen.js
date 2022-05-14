import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/notiComponents/Header'
import styles from '../components/styles'
import UserOptionTag from '../components/userComponents/UserOptionTag'
import SeparateView from '../components/userComponents/SeparateView'
import { useNavigation } from '@react-navigation/native'

export default function EditInfoScreen() {
    const navigation = useNavigation();
    const userInfo = {
        name: 'Lê Công Nam',
        username: 'lecongnam',
        gender: 'Nam',
        dateOfBirth: '01-02-2001',
        phoneNumber: '0335927773',
        address: null,
    }
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
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('EditName', {name: userInfo.name});

            }}
        >
            <UserOptionTag 
                title = {"Tên"} 
                description = {userInfo.name == null ? null : userInfo.name} 
                containIcon = {false}
            />
        </TouchableOpacity>
        <UserOptionTag 
            title = {"Tên đăng nhập"} 
            description = {userInfo.username}
            containIcon = {false}
            containRightArrow = {false}
        />
        <SeparateView/>
        <UserOptionTag 
            title = {"Giới tính"} 
            description = {userInfo.gender == null ? null : userInfo.gender}
            containIcon = {false}
        />
         <UserOptionTag 
            title = {"Ngày sinh"} 
            description = {userInfo.dateOfBirth == null ? null : userInfo.dateOfBirth}
            containIcon = {false}
        />
        <TouchableOpacity
            onPress = {() => {
                navigation.navigate('EditPhoneNumber', {phoneNumber: userInfo.phoneNumber})
            }}
        >
            <UserOptionTag 
                title = {"Số điện thoại"} 
                description = {userInfo.phoneNumber == null ? null : userInfo.phoneNumber}
                containIcon = {false}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress = {() => {
                navigation.navigate('EditAddress', {address: userInfo.address})
            }}
        >
            <UserOptionTag 
                title = {"Địa chỉ"} 
                description = {userInfo.address == null ? null : userInfo.address}
                containIcon = {false}
            />
        </TouchableOpacity>
        <SeparateView/>
        <TouchableOpacity
            style = {styles.hr_bottom}
            onPress = {() => {
                navigation.navigate('EditPassword')
            }}
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