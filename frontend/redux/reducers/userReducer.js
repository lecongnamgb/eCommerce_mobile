import GLOBAL_TYPES from "../../constants/actions";

const initialState = {
  token: {
    accessToken: "",
    refreshToken: "",
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_TYPES.SIGN_IN:
      return {
        ...state,
        token: {
          ...action.payload,
        },
      };
    case GLOBAL_TYPES.REFRESH_TOKEN:
      return {
        ...state,
        token: {
          ...state.token,
          accessToken: action.payload,
        },
      };
    case GLOBAL_TYPES.CLEAR_USER_INFO:
      return {};
    default:
      return state;
  }
}
