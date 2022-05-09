import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/notiComponents/Header'
import ListFilterItem from '../components/billStatusComponents/ListFilterItem'

export default function BillStatus() {
  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: '#fff'}}>
        <Header
            title = {"Đơn mua"}
            canBack = {true}
        />
        <ListFilterItem/>
    </SafeAreaView>
  )
}