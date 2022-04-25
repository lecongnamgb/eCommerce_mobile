import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import styles from '../styles';

const {width} = Dimensions.get("window");


export default function RecommendItem(props) {
    var {recommendItem} = props
    var stars = [];
    for (let i = 1; i <= recommendItem.rating; i++) {
        stars.push(i);
    }
    var hasHalfStar = false;
    if (!Number.isInteger(recommendItem.rating)) {
        hasHalfStar = true;
    }
    var convertPrice = price => {
        var convertedPrice = price.toString();
        var count = 0;
        var ans = "";
        for (var i = convertedPrice.length - 1; i >= 0; i--) {
            count++;
            if (count == 3) {
                ans[i] = convertedPrice[i] +".";
                count = 0;
            } else {
                ans[i] = convertedPrice[i];
            }
        }
        return ans;
    }
  return (
    <View style={[{width: width/2}, styles.alignCenterItem,styles.bg_lightGrey, {padding: 3}]}>
        <View>
        <Image
            source={recommendItem.sourceIcon}
            style={{width: width/2 - 6, height: width/2 - 6, resizeMode: 'contain', backgroundColor: '#fff'}}
        />
        <View style = {{position: 'absolute', top: 3, right: 3}}>
            <View style = {[styles.promo_icon_body]}>
                <Text style = {{textAlign: 'center', color: 'red', fontSize: 12}}>23%</Text>
                <Text style = {{textAlign: 'center', color: '#fff', fontSize: 12}}>GIẢM</Text>
                </View>
            <View style = {styles.promo_icon}/>
        </View>
        <View style= {[styles.pt_10, styles.pl_10, styles.pr_10, styles.pb_10, styles.bg_white]}>
            <View style = {[{width: '100%', height: 50}]}>
                <Text style = {{textAlign: 'left', }} numberOfLines = {2}> {recommendItem.title} </Text>
            </View>
            {props.containRating == true? 
             <View>
                <Text style = {{color: 'red', fontSize: 20}}>{recommendItem.price}đ</Text>
                <View style = {[styles.flex_row, styles.mt_10]}>
                    {
                        stars.map(item => <Image source = {require('../../assets/icon/1star.png')} style = {styles.img_12x12}/>)
                    }
                    {
                        hasHalfStar ? <Image source = {require('../../assets/icon/halfStar.png')} style = {styles.img_12x12}/> : null
                    }
                        <Text style = {{fontSize: 12, paddingLeft: 10}}>Đã bán {recommendItem.quantitySold >= 1000 ? recommendItem.quantitySold / 1000 + "k": recommendItem.quantitySold}</Text>
                </View>
                <View style = {[styles.mt_10, styles.flex_row]}>
                    <View style = {{top: 2}}>
                        <Image
                            source = {require('../../assets/icon/pin.png')}
                            style = {styles.img_12x12}
                        />
                    </View>
                    <Text style = {{fontSize: 12}}>{" " + recommendItem.location}</Text>
                </View>
            </View>
             : 
            <View style = {{width: '100%', flex: 0, flexDirection: 'row'}}>
                <Text style = {{justifyContent: 'flex-start', flex: 0, color: 'red', fontSize: 16}}>
                    {
                        recommendItem.price
                    }đ
                </Text>
                <View style = {[styles.flex_row, styles.flex_end]}>
                <Text style = {{fontSize: 12}}>Đã bán {recommendItem.quantitySold >= 1000 ? recommendItem.quantitySold / 1000 + "k": recommendItem.quantitySold}</Text>
                </View>
            </View>
            }
        </View>
        </View>
    </View>
  )
}