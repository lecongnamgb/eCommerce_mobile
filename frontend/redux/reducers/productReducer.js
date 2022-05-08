import GLOBAL_TYPES from "../../constants/actions";

const initialState = {
  data: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_TYPES.GET_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
