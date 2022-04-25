import { SafeAreaView, FlatList, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/searchComponents/SearchBar'
import styles from '../components/styles'
import { useNavigation } from '@react-navigation/native'
import FliterBar from '../components/searchComponents/FliterBar'
import AgentIntro from '../components/searchComponents/AgentIntro'
import RecommendItem from '../components/homeComponents/RecommendItem'

export default function ResultSearchScreen({route}) {
    const listData = [
        {
            id: 1,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 2,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 3,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 170,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 4,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 5,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 6,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 7,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 8,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 9,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 10,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 5,
            location: "Thành phố Hồ Chí Minh",
        }
    ]
  return (
    <SafeAreaView style = {styles.bg_white}>
            <SearchBar 
                widthSearchInput = {"80%"}
                value = {route.params.text}
                focus = {false}
            />
            <FliterBar/>
            <FlatList
                data={listData}
                renderItem={({item}) => <RecommendItem recommendItem = {item} containRating = {true}/>}
                keyExtractor={item => item.id}
                numColumns={2}
                scrollEnabled={true}
                ListHeaderComponent= {AgentIntro}
                ListFooterComponent = {<View style = {{height: 100}}></View>}
        />
    </SafeAreaView>
  )
}