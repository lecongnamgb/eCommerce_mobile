import GLOBAL_TYPES from "../../constants/actions";

const initialState = {
  allProducts: {
    data: []
  },
  productById: {
    data: []
  },
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_TYPES.GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload
      };
    case GLOBAL_TYPES.GET_PRODUCT_BY_ID: 
      return {
        ...state,
        productById: action.payload
      }
    default:
      return state;
  }
}