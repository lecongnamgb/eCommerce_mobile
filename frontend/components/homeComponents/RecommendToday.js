import { View, Text } from "react-native";
import React from "react";
import HorizontalRecommendList from "./HorizontalRecommendList";
import styles from "../styles";
import CategoryListItem from "./CategoryListItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getProductLines } from "../../redux/actions/productlineActions";
export default function RecommendToday() {
  const productlineList = useSelector((state) => state.productlines);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductLines());
  }, []);

  return (
    <View>
      <CategoryListItem productlines={productlineList.data} />
      <View
        style={[
          styles.alignCenterItemVertically,
          styles.pl_10,
          styles.bg_white,
          { height: 40 },
        ]}
      >
        <Text style={styles.color_orange}>GỢI Ý HÔM NAY</Text>
      </View>
      <HorizontalRecommendList />
    </View>
  );
}
