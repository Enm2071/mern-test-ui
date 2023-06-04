import actionTypes from "../actions/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(items => items.id !== action.payload.id),
      };
    case actionTypes.FILTER_PRODUCTS:
      const filteredProducts = state.products.filter(product => product.title?.toLowerCase().includes(action.payload?.toLowerCase()));
      return {
        ...state,
        filteredProducts: filteredProducts,
      }
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.SIGN_UP:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case actionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.SIGN_IN:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
    case actionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }      
    default:
      return state;
  }
};

export default reducer;
