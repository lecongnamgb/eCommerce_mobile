import { View, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import HeaderProduct from '../components/productComponents/HeaderProduct'
import Carousel from '../components/homeComponents/Carousel'
import FooterProduct from '../components/productComponents/FooterProduct'
import styles from '../components/styles'
import OverviewProduct from '../components/productComponents/OverviewProduct'
import SeparateView from '../components/userComponents/SeparateView'
import AgentIntro from '../components/searchComponents/AgentIntro'
import DescriptionProduct from '../components/productComponents/DescriptionProduct'
import BestSellerList from '../components/productComponents/BestSellerList'
import BriefEvaluation from '../components/productComponents/BriefEvaluation'
import { useSelector, useDispatch } from 'react-redux'
import { getProductById } from '../redux/actions/productActions';
export default function Product({ route }) {
    const productId = route.params.id;
    const dispatch = useDispatch();
    const product = useSelector(state => state.products);
    useEffect(() => {
        dispatch(getProductById(productId));
    }, []);
    console.log(productId);
    const images = [
        {
            id: 1,
            sourceIcon: require('../assets/icon/Ghile_1.jpeg')
        },
        {
            id: 2,
            sourceIcon: require('../assets/icon/Ghile_2.jpeg')
        },
        {
            id: 3,
            sourceIcon: require('../assets/icon/Ghile_3.jpeg')
        },
        {
            id: 4,
            sourceIcon: require('../assets/icon/Ghile_4.jpeg')
        },
    ]
  return (
    <SafeAreaView style = {[styles.bg_white]}>
        <View style = {{position: 'absolute', top: 35, right: 1, left: 1, zIndex: 2}}>
            <HeaderProduct/>
        </View>
        <View style = {{position: 'absolute', bottom: 0, zIndex: 1}}>
            <FooterProduct/>
        </View>
        <ScrollView>
            <Carousel listData = {images}/>
            <OverviewProduct isSale = {true} { ...product.data }/>
            <SeparateView/>
            <AgentIntro/>
            <SeparateView/>
            <BestSellerList/>
            <SeparateView/>
            <DescriptionProduct description={product.data.description}/>
            <SeparateView/>
            <BriefEvaluation/>
            <View style = {{height: 30}}/>
        </ScrollView>
    </SafeAreaView>
  )
}