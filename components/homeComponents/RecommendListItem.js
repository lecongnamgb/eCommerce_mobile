import { View, FlatList } from 'react-native'
import React from 'react'
import RecommendItem from './RecommendItem'
import RecommendToday from './RecommendToday'

const listData = [
    {
        id: 1,
        sourceIcon: require('../../assets/icon/ao123.png'),
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 2,
        sourceIcon: require('../../assets/icon/ao123.png'),
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 3,
        sourceIcon: require('../../assets/icon/ao123.png'),
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 170
    },
    {
        id: 4,
        sourceIcon: require('../../assets/icon/ao123.png'),
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 5,
        sourceIcon: require('../../assets/icon/ao123.png'),
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 6,
        sourceIcon: require('../../assets/icon/ao123.png'),
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 7,
        sourceIcon: require('../../assets/icon/ao123.png'),
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 8,
        sourceIcon: require('../../assets/icon/ao123.png'),
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 9,
        sourceIcon: require('../../assets/icon/ao123.png'),
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 10,
        sourceIcon: require('../../assets/icon/ao123.png'),
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    }
]

export default function RecommendListItem() {
  return (
      <View>
        <FlatList
                data={listData}
                renderItem={({item}) => <RecommendItem recommendItem = {item}/>}
                keyExtractor={item => item.id}
                numColumns={2}
                scrollEnabled={true}
                ListHeaderComponent={RecommendToday}
        />
   </View>
  )
}