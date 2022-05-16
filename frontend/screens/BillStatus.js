import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Header from '../components/notiComponents/Header'
import ListFilterItem from '../components/billStatusComponents/ListFilterItem'
import RecommendItem from '../components/homeComponents/RecommendItem'
import ItemStatus from '../components/billStatusComponents/ItemStatus'
import SeparateView from '../components/userComponents/SeparateView'
import { useNavigation } from '@react-navigation/native'

export default function BillStatus({route}) {
    const navigation = useNavigation();
    const [listData, setListData] = useState([
        {
            id: 0,  
            shopName: 'shop1',
            uriImg: 'https://top10tphcm.com/wp-content/uploads/2019/08/ao-thun-tay-lo-co-gai-sexy.png',
            productName: 'Áo thun chất lượng vjppro 123 123 123 123 123',
            priceEach: 325000,
            quantity: 1,
        },
        {
            id: 1,  
            shopName: 'shop1',
            uriImg: 'https://top10tphcm.com/wp-content/uploads/2019/08/ao-thun-tay-lo-co-gai-sexy.png',
            productName: 'Áo thun chất lượng vjppro 123 123 123 123 123 ',
            priceEach: 325000,
            quantity: 1,
        },
        {
            id: 2,  
            shopName: 'shop1',
            uriImg: 'https://top10tphcm.com/wp-content/uploads/2019/08/ao-thun-tay-lo-co-gai-sexy.png',
            productName: 'Áo thun chất lượng vjppro 123 123 123 123 123 ',
            priceEach: 325000,
            quantity: 1,
        },
        {
            id: 3,  
            shopName: 'shop1',
            uriImg: 'https://top10tphcm.com/wp-content/uploads/2019/08/ao-thun-tay-lo-co-gai-sexy.png',
            productName: 'Áo thun chất lượng vjppro 123 123 123 123 123 ',
            priceEach: 325000,
            quantity: 1,
        },
        {
            id: 4,  
            shopName: 'shop1',
            uriImg: 'https://top10tphcm.com/wp-content/uploads/2019/08/ao-thun-tay-lo-co-gai-sexy.png',
            productName: 'Áo thun chất lượng vjppro 123 123 123 123 123 ',
            priceEach: 325000,
            quantity: 1,
        },
    ])
  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: '#fff'}}>
        <Header
            title = {"Đơn mua"}
            canBack = {true}
        />
        <ListFilterItem
            activePage = {route.params == undefined ? "Chờ lấy hàng" : route.params.title}
        />
        <ScrollView>
            <SeparateView/>
            {
                listData.map(item => 
                    <ItemStatus
                        key = {item.id}
                        shopName = {item.shopName}
                        uriImg = {item.uriImg}
                        productName = {item.productName}
                        quantity = {item.quantity}
                        priceEach = {item.priceEach}
                        handlePress = {() => {
                            navigation.navigate("Review")
                        }}
                    />
                )
            }
        </ScrollView>
    </SafeAreaView>
  )
}