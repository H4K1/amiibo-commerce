import { cartAddItem, cartRemoveItem } from "./utils"; 

const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case "cart/addItem":
      return cartAddItem(state, action)
    case "cart/removeItem":
      return cartRemoveItem(state, action)
    default:
      return state;
  }
};

export default shoppingCartReducer;
