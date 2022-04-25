import { View, Text, FlatList, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CartItem from './CartItem'
import Header from '../notiComponents/Header'
import CartBill from './CartBill'

const dumpData = [
    {
        id: 1,
        sourceIcon: require('../../assets/icon/ao123.png'),
        description: 'áo vjp pro 123 png 123 fasd sdcd ăer',
        shopName: 'shop1',
        price: 19000
    },
    {
        id: 2,
        sourceIcon: require('../../assets/icon/ao123.png'),
        description: 'áo vjp pro 123 png 123 fasd sdcd ăer',
        shopName: 'shop2',
        price: 19000
    },
    {
        id: 3,
        sourceIcon: require('../../assets/icon/ao123.png'),
        description: 'áo vjp pro 123 png 123 fasd sdcd ăer',
        shopName: 'shop3',
        price: 19000
    },
    {
        id: 4,
        sourceIcon: require('../../assets/icon/ao123.png'),
        description: 'áo vjp pro 123 png 123 fasd sdcd ăer',
        shopName: 'shop4',
        price: 19000
    },
    {
        id: 5,
        sourceIcon: require('../../assets/icon/ao123.png'),
        description: 'áo vjp pro 123 png 123 fasd sdcd ăer',
        shopName: 'shop5',
        price: 19000
    },
    {
        id: 6,
        sourceIcon: require('../../assets/icon/ao123.png'),
        description: 'áo vjp pro 123 png 123 fasd sdcd ăer',
        shopName: 'shop6',
        price: 19000
    },

]

export default function Cart() {
  return (
      <SafeAreaView>
          <View>
            <FlatList
                data = {dumpData}
                renderItem = {({item}) => 
                <CartItem
                    sourceIcon = {item.sourceIcon}
                    description = {item.description}
                    shopName = {item.shopName}
                    price = {item.price}
                />}
                keyExtractor = {item => item.id}
                ListHeaderComponent = {<Header title = "Giỏ hàng" canBack = {true}/>}
                stickyHeaderIndices = {[0]}
                ListFooterComponent = {<View style = {{height: 100}}></View>}
            />
          </View>
          <CartBill/>
      </SafeAreaView>
  )
}