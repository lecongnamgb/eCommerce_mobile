import { View, Text, SafeAreaView, TextInput, Button } from 'react-native'
import React from 'react'
import SearchForm from '../components/homeComponents/SearchForm'
import styles from '../components/styles'
import { useNavigation } from '@react-navigation/native'
import HistorySearchList from '../components/searchComponents/HistorySearchList'
import { useState } from 'react/cjs/react.production.min'

export default function SearchScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style = {[styles.bg_white]}>
        <View style = {[styles.flex_row, {borderBottomColor: '#f2f2f2', borderBottomWidth: 1}]}>
            <TextInput 
                autoFocus= {true}
                placeholder='Tìm kiếm sản phẩm hoặc shop'
                style = {[
                        {
                            width: '80%', 
                            height: 36, 
                            backgroundColor: '#f2f2f2', 
                            borderRadius: 3,
                            fontSize: 15
                        }, 
                        styles.p_10, 
                        styles.mb_15,
                        styles.ml_10,
                        styles.mt_10
                        ]}
            />
            <View style = {[styles.mt_10]}>
                <Button
                    title = {"Thoát"}
                    color = 'red'
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                />
            </View>
      </View>
      <HistorySearchList/>
    </SafeAreaView>
  )
}