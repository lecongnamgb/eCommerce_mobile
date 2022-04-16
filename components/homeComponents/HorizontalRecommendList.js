import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RecommendCategory from './RecommendCategory'

const listData = [
    {
        id: 0,
        sourceIcon: require('../../assets/icon/all.png'),
        active: true,
        title: "Tất cả"
    },
    {
        id: 1,
        sourceIcon: require('../../assets/icon/men_clothings.png'),
        title: "Quần áo nam"
    },
    {
        id: 2,
        sourceIcon: require('../../assets/icon/women_clothings.png'),
        title: "Quần áo nữ"
    }, 
    {
        id: 3,
        sourceIcon: require('../../assets/icon/cooking_tools.png'),
        title: "Nhà cửa & đời sống"
    },
    {
        id: 4,
        sourceIcon: require('../../assets/icon/toys.png'),
        title: "Đồ chơi"
    },
    {
        id: 5,
        sourceIcon: require('../../assets/icon/books.png'),
        title: "Sách"
    },
    {
        id: 6,
        sourceIcon: require('../../assets/icon/electronic_devices.png'),
        title: "Thiết bị điện tử"
    },
    {
        id: 7,
        sourceIcon: require('../../assets/icon/cosmetics.png'),
        title: "Mỹ phẩm"
    },
    {
        id: 8,
        sourceIcon: require('../../assets/icon/men_shoes.png'),
        title: "Giày dép nam"
    },
    {
        id: 9,
        sourceIcon: require('../../assets/icon/women_shoes.png'),
        title: "Giày dép nữ"
    }, 
    {
        id: 10,
        sourceIcon: require('../../assets/icon/accessories.png'),
        title: "Phụ kiện" 
    }
]

export default function HorizontalRecommendList() {

  return (
    <FlatList
        data={listData}
        horizontal
        renderItem={({item}) => (
            <RecommendCategory sourceIcon={item.sourceIcon} title={item.title} active={item.active}/>
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
    />
  )
}