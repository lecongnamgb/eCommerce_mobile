import { View, Text } from "react-native";
import React from "react";
import HorizontalRecommendList from "./HorizontalRecommendList";
import styles from "../styles";
import CategoryListItem from "./CategoryListItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getProductLines } from "../../redux/actions/productlineActions";
import { refreshToken } from "../../redux/actions/userActions";
export default function RecommendToday() {
  const productlineList = useSelector((state) => state.productlines);
  const error = useSelector((state) => state.error);
  // console.log(error);
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductLines());
    dispatch(
      refreshToken({
        refreshToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6InVzZXIiLCJ0b2tlblR5cGUiOiJSRUZSRVNIX1RPS0VOIiwiaWF0IjoxNjUyMjc3MjU1LCJleHAiOjE2NTQ4NjkyNTV9.trgsCJlBbGMOZOS_KN0ONVHVBfNZkKSEokF1CSBqQPI",
      })
    );
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
      <HorizontalRecommendList productlines={productlineList.data} />
    </View>
  );
}
