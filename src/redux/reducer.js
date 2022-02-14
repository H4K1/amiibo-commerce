import { combineReducers } from 'redux'

import shoppingCartReducer from './shoppingCart'
import modalReducer from './modal'

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  showShoppingCartModal: modalReducer,
})

export default rootReducer;
