import { 
    View, 
    Text, 
    Image, 
    Dimensions,
    FlatList,
    SafeAreaView } from 'react-native'
import React, { useState } from 'react';

import styles from '../styles';

const {width} = Dimensions.get("window");
const height = width * 0.3;

export default function Carousel() {
    const images = [
        {
            id: 1,
            sourceIcon: require('../../assets/icon/carousel_1.png'),
        },
        {
            id: 2,
            sourceIcon: require('../../assets/icon/carousel_2.png'),
        },
        {
            id: 3,
            sourceIcon: require('../../assets/icon/carousel_3.png')
        }
]
    // const [images, setImages] = useState(
    //     [
    //         require('../../assets/icon/carousel_1.png'),
    //         require('../../assets/icon/carousel_2.png'),
    //         require('../../assets/icon/carousel_3.png')
    //     ]
    // )

    const [active, setActive] = useState(0);
    const [value, setValue] = useState(value);

const change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    /*
    nativeEvent là sự kiện của react native trả ra 1 object các thuộc tính của màn hình
    contentInset: 1 
    */
//    console.log(nativeEvent.contentOffset);
    if (slide !== active) {
        setActive(slide)
    }
}

    const renderItem = ({item, index}) => (
        <Image
            key={index}
            source={item.sourceIcon}
            style={{width, height, resizeMode: 'contain'}}
        />
    )

    if(images && images.length) {
    return (
        <SafeAreaView style={{width, height}}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            scrollEventThrottle={16}
            decelerationRate={"fast"}
            onScroll={change}
            showsHorizontalScrollIndicator={false}
            data={images}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <View style = {{flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center'}}>
                 {
                     images.map((image, key) => (
                         <Text 
                             key = {key}
                             style = {key == active ? styles.activeDot : styles.dot}
                         >
                             ●
                         </Text>
                     ))
                 }
             </View>
        </SafeAreaView>
      );
                }
                return null;

}