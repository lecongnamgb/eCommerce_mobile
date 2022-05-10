import GLOBAL_TYPES from "../../constants/actions";
import axios from "axios";
import { SERVICE_URL } from "../../constants/server";

export const getProducts = () => async (dispatch) => {
  const response = await axios({
    url:
      SERVICE_URL.API_SERVER +
      SERVICE_URL.PRODUCT_PREFIX +
      SERVICE_URL.PRODUCT_SERVICES.GET_ALL_PRODUCTS.URL,
    method: SERVICE_URL.PRODUCT_SERVICES.GET_ALL_PRODUCTS.METHOD,
  });

  dispatch({
    type: GLOBAL_TYPES.GET_PRODUCTS,
    payload: response.data.data,
  });
};

export const getProductById = (id) => async (dispatch) => {
  const response = await axios({
    url:
      SERVICE_URL.API_SERVER +
      SERVICE_URL.PRODUCT_PREFIX +
      SERVICE_URL.PRODUCT_SERVICES.GET_PRODUCT_BY_ID.URL +
      id,
    method: SERVICE_URL.PRODUCT_SERVICES.GET_PRODUCT_BY_ID.METHOD,
  });

  dispatch({
    type: GLOBAL_TYPES.GET_PRODUCT_BY_ID,
    payload: response.data.data,
  });
};
