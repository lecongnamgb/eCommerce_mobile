import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles";
import PromoIcon from "../homeComponents/PromoIcon";
import RatingStar from "./RatingStar";
import basic_heart from "../../assets/icon/basic_heart.png";
import blank_heart from "../../assets/icon/blank_heart.png";
import { useState } from "react";
import { formatMoney } from '../../helper/utils';
export default function OverviewProduct(props) {
  const [isLike, setIsLike] = useState(false);
  return (
    <View style={[styles.m_10, styles.bg_white]}>
      <View
        style={[
          props.isSale ? { width: "85%" } : { width: "95%" },
          styles.flex_row,
        ]}
      >
        <Text numberOfLines={2} style={{ fontSize: 17 }}>
          {props.productName}
        </Text>
        {props.isSale ? (
          <View style={[styles.pl_15, styles.pr_15]}>
            <PromoIcon discount={props.discount} />
          </View>
        ) : null}
      </View>
      <View style={[styles.mt_15, styles.mb_20]}>
        <Text style={{ color: "red", fontSize: 20 }}>{formatMoney(props.priceEach)}đ</Text>
        <Text
          style={{
            color: "#4d4d4d",
            fontSize: 16,
            textDecorationLine: "line-through",
            paddingTop: 5,
          }}
        >
          {formatMoney(props.priceEach)}đ
        </Text>
      </View>
      <View style={styles.flex_row}>
        <RatingStar stars={3.5} size={16} />
        <View style={{ borderRightColor: "#ccc", borderRightWidth: 1 }}>
          <Text style={[styles.pl_10, styles.pr_10, { fontSize: 15 }]}>
            3.5
          </Text>
        </View>
        <Text style={styles.pl_15}>Đã bán {props.soldQuantity}</Text>
        <TouchableOpacity
          style={{ position: "absolute", right: 10, bottom: -2 }}
          activeOpacity={1}
          onPress={() => setIsLike(!isLike)}
        >
          <Image
            source={isLike ? basic_heart : blank_heart}
            style={styles.img_24x24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
