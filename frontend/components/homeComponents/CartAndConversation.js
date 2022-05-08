import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

export default function CartAndConversation() {
  const navigation = useNavigation();

  return (
    <View style={[styles.flex_row, styles.mt_10, styles.ml_10]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate("Cart", { screen: "Cart" });
        }}
      >
        <Image
          source={require("../../assets/icon/cart.png")}
          style={[styles.img_24x24, styles.m_5, styles.ml_10]}
        />
      </TouchableOpacity>
      <Image
        source={require("../../assets/icon/text_message.png")}
        style={[styles.img_24x24, styles.m_5, styles.ml_10]}
      />
    </View>
  );
}
