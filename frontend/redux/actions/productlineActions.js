import GLOBAL_TYPES from "../../constants/actions";
import axios from "axios";
import { SERVICE_URL } from "../../constants/server";

export const getProductLines = () => async (dispatch) => {
  const response = await axios({
    url:
      SERVICE_URL.API_SERVER +
      SERVICE_URL.PRODUCTLINE_PREFIX +
      SERVICE_URL.PRODUCT_LINE_SERVICES.GET_ALL_PRODUCT_LINES.URL,
    method: SERVICE_URL.PRODUCT_LINE_SERVICES.GET_ALL_PRODUCT_LINES.METHOD,
  });

  dispatch({
    type: GLOBAL_TYPES.GET_PRODUCT_LINE,
    payload: response.data,
  });
};


