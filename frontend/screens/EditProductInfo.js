import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import FieldWithUpperLabel from '../components/checkInComponents/FieldWithUpperLabel'
import Header from '../components/notiComponents/Header'
import styles from '../components/styles'
import SeparateView from '../components/userComponents/SeparateView'

export default function EditProductInfo({route}) {
    const [productName, setProductName] = useState(route.params?.productName);
    const [price, setPrice] = useState(route.params?.price)
    const [uriProductAvt, setUriProductAvt] = useState(route.params?.uriProductAvt)
    const [uriProductImg1, setUriProductImg1] = useState(route.params?.uriProductImg1)
    const [uriProductImg2, setUriProductImg2] = useState(route.params?.uriProductImg2)
    const [uriProductImg3, setUriProductImg3] = useState(route.params?.uriProductImg3)
    const [description, setDescription] = useState(route.params?.description)
  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: '#fff'}}>
        <Header
            title = {route.params.title}
            canBack = {true}
        />
        <View style = {styles.hr_light_bottom}>
            <FieldWithUpperLabel
                label = {"Tên sản phẩm"}
                plhdTitle = {"Tên sản phẩm"}
                value = {productName}
                onChangeText = {txt => setProductName(txt)}
            />
        </View>
        <View style = {styles.hr_light_bottom}>
            <FieldWithUpperLabel
                label = {"Giá sản phẩm"}
                plhdTitle = {"Giá"}
                value = {price}
                onChangeText = {txt => setPrice(txt)}
            />
        </View>
        <View style = {styles.hr_light_bottom}>
            <FieldWithUpperLabel
                label = {"Ảnh đại diện sản phẩm"}
                plhdTitle = {"Link ảnh"}
                value = {uriProductAvt}
                onChangeText = {txt => setUriProductAvt(txt)}
            />
        </View>
        <SeparateView/>
        <View style = {styles.hr_light_bottom}>
            <FieldWithUpperLabel
                label = {"Link ảnh phụ 1"}
                plhdTitle = {"Link ảnh 1"}
                value = {uriProductImg1}
                onChangeText = {txt => setUriProductImg1(txt)}
            />
        </View>
        <View style = {styles.hr_light_bottom}>
            <FieldWithUpperLabel
                label = {"Link ảnh phụ 2"}
                plhdTitle = {"Link ảnh 2"}
                value = {uriProductImg2}
                onChangeText = {txt => setUriProductImg2(txt)}
            />
        </View>
        <View style = {styles.hr_light_bottom}>
            <FieldWithUpperLabel
                label = {"Link ảnh phụ 3"}
                plhdTitle = {"Link ảnh 3"}
                value = {uriProductImg3}
                onChangeText = {txt => setUriProductImg3(txt)}
            />
        </View>
        <SeparateView/>
        <View>
            <TextInput
                style = {{backgroundColor: '#f2f2f2', height: 150, margin: 10, paddingLeft: 10, paddingTop: 10}}
                placeholder = {"Mô tả sản phẩm"}
                multiline = {true}
                value = {description}
                onChangeText = {txt => setDescription(txt)}
            />
        </View>
        <TouchableOpacity 
            style = {[{marginLeft: 20, marginTop: 20, marginRight: 20, backgroundColor: '#66b3ff', borderRadius: 10, height: 30}, styles.alignCenterItem, styles.alignCenterItemVertically]}
            onPress = {() => {
                console.log(numberOfStars, review)
            }}
        >
                <Text style = {{color: '#fff'}}>Lưu</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}