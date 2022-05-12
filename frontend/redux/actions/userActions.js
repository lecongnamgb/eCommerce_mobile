import GLOBAL_TYPES from "../../constants/actions";
import axios from "axios";
import { SERVICE_URL } from "../../constants/server";
import { getBodyError } from "../../helper/utils";
export const login = (props) => async (dispatch) => {
  await axios({
    url: SERVICE_URL.API_SERVER + "client-auth/signin",
    method: "POST",
    data: props,
  })
    .then((response) => {
      dispatch({
        type: GLOBAL_TYPES.SIGN_IN,
        payload: response.data.data,
      });
      dispatch({
        type: GLOBAL_TYPES.DELETE_ERROR,
      });
    })
    .catch((err) => {
      dispatch({
        type: GLOBAL_TYPES.ERROR,
        payload: JSON.parse(err.response.request._response),
      });
    });
};

export const register = (props) => async (dispatch) => {
  await axios({
    url: SERVICE_URL.API_SERVER + "client-auth/signup",
    method: "POST",
    data: props,
  })
    .then((response) => {
      dispatch({
        type: GLOBAL_TYPES.DELETE_ERROR,
      });
    })
    .catch((err) => {
      dispatch({
        type: GLOBAL_TYPES.ERROR,
        payload: JSON.parse(err.response.request._response),
      });
    });
};

export const refreshToken = (props) => async (dispatch) => {
  await fetch(SERVICE_URL.API_SERVER + "client-auth/refresh-access-token", {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GLOBAL_TYPES.SIGN_IN,
        payload: data.data,
      });
      dispatch({
        type: GLOBAL_TYPES.DELETE_ERROR,
      });
    })
    .catch((err) => {
      console.log(err);
      // dispatch({
      //   type: GLOBAL_TYPES.ERROR,
      //   payload: JSON.parse(err.response.request._response),
      // });
    });
};
