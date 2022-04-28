import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles';

export default function AgentIntro(props) {
  return (
    <View style = {styles.flex_row}>
        <View style = {[styles.ml_10, styles.mt_15, styles.mb_15, styles.flex_row, props.seeMore ? {borderRightColor: '#ccc', borderRightWidth: 1} : null, {width: '75%'}]}>
            <View style = {[styles.pl_10, styles.pr_10]}>
                <Image
                    source = {require('../../assets/icon/ao123.png')}
                    style = {[styles.img_64x64, styles.rounded]}
                />
            </View>
                <View>
                    <Text style = {{fontWeight: 'bold', fontSize: 16, marginBottom: 5}}>Shop bán quần áo</Text>
                    <Text style = {{marginBottom: 5, color: '#595959'}}>Tên chủ shop</Text>
                    <View style = {styles.flex_row}>
                        <Text style = {{color: '#595959'}}>
                            <Text style = {styles.filterBar_text_active}>
                            47{" "}
                            </Text>
                            Sản phẩm {"  "}
                        </Text>
                        <Text style = {{color: '#595959'}}>
                            <Text style = {styles.filterBar_text_active}>
                            4.7{" "}
                            </Text>
                            Đánh giá
                        </Text>
                    </View>
                </View>
        </View>
        {props.seeMore? 
        <View style = {[styles.alignCenterItemVertically, {width: '20%', paddingLeft: 16}]}>
            <Text style = {[{fontSize: 16, textAlign: 'center'}, styles.filterBar_text_active]}>Thêm kết quả</Text>
        </View>
        : 
        <View  style = {[styles.alignCenterItemVertically, {width: '25%'}]}>
            <TouchableOpacity style = {[{borderColor: 'red', borderWidth: 1, width: 90, right: 15, height: 30, borderRadius: 3}, styles.alignCenterItemVertically]}>
                <Text style = {{textAlign: 'center', color: 'red'}}>Xem Shop</Text>
            </TouchableOpacity>
        </View>
        }
    </View>
  )
}