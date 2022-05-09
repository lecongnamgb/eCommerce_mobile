import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FilterItem from './FilterItem'

export default function ListFilterItem() {
    const listData = [
        {
            id: 0,
            title: "Chờ lấy hàng",
            active: true,
        },
        {
            id: 1,
            title: "Đang giao",
            active: false,
        },
        {
            id: 2,
            title: "Đã giao",
            active: false,
        },
        {
            id: 3,
            title: "Đã huỷ",
            active: false,
        },
        
    ]
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator= {false}
    >
        {
            listData.map(item => <FilterItem title = {item.title} key = {item.id}/>)
        }
    </ScrollView>
  )
}