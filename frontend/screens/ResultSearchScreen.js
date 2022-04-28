import { SafeAreaView, FlatList, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/searchComponents/SearchBar'
import styles from '../components/styles'
import { useNavigation } from '@react-navigation/native'
import FliterBar from '../components/searchComponents/FliterBar'
import AgentIntro from '../components/searchComponents/AgentIntro'
import RecommendItem from '../components/homeComponents/RecommendItem'
import CategoryItem from '../components/homeComponents/CategoryItem'

export default function ResultSearchScreen({route}) {
    const listData = [
        {
            id: 101,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 102,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 103,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 170,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 104,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 105,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 106,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 107,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 108,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 109,
            sourceIcon: require('../assets/icon/ao123.png'),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 110,
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
                numColumns={2}
                scrollEnabled={true}
                keyExtractor ={item => item.id}
                ListHeaderComponent= {<AgentIntro seeMore = {true}/>}
                ListFooterComponent = {<View style = {{height: 100}}></View>}
        />
    </SafeAreaView>
  )
}