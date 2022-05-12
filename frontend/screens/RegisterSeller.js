import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Header from '../components/notiComponents/Header'
import SeparateView from '../components/userComponents/SeparateView'
import NormalField from '../components/checkInComponents/NormalField'
import FieldWithUpperLabel from '../components/checkInComponents/FieldWithUpperLabel'
import styles from '../components/styles'

export default function RegisterSeller() {
    const [shopName, setShopName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [linkImage, setLinkImage] = useState('');
  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: '#fff'}}>
      <Header
        title = {"Cài đặt thông tin cửa hàng"}
        canBack = {true}
      />
      <SeparateView/>
      <View style = {styles.hr_bottom}>
        <FieldWithUpperLabel
            plhdTitle = {"Nhập tên shop"}
            label = {"Tên shop"}
            value = {shopName}
            onChangeText = {text => setShopName(text)}
            focus = {true}
            />
      </View>
        <FieldWithUpperLabel
                plhdTitle = {"Link ảnh"}
                label = {"Ảnh đại diện của shop"}
                value = {linkImage}
                onChangeText = {link => setLinkImage(link)}
            />
        <SeparateView/>
        <View style = {styles.hr_bottom}>
            <FieldWithUpperLabel
                plhdTitle = {"Địa chỉ"}
                label = {"Địa chỉ lấy hàng"}
                value = {address}
                onChangeText = {text => setAddress(text)}
            />
        </View>
        <View style = {styles.hr_bottom}>
            <FieldWithUpperLabel
                plhdTitle = {"Link ảnh"}
                label = {"Ảnh đại diện của shop"}
                value = {linkImage}
                onChangeText = {link => setLinkImage(link)}
            />
        </View>
        <TouchableOpacity 
            style = {[{backgroundColor: '#66b3ff', borderRadius: 10, height: 35, marginLeft: 40, marginTop: 20, marginRight: 40}, styles.alignCenterItem, styles.alignCenterItemVertically]}

        >
            <Text style = {{color: '#fff', fontSize: 16}}>Lưu</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}