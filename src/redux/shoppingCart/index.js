import localStorage from '../../services/localStorage';
import { cartAddItem, cartRemoveItem, cartReset } from './utils';

const initialState = localStorage.getData('shopping_cart')

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cart/addItem':
      return cartAddItem(state, action)
    case 'cart/removeItem':
      return cartRemoveItem(state, action)
    case 'cart/reset':
      state = []
      localStorage.saveData('shopping_cart', state)
      return state
    default:
      return state;
  }
};

export default shoppingCartReducer;
