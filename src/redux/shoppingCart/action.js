const addItemToCart = (dispatch, payload) => {
  dispatch({ type: 'cart/addItem', payload })
}

const removeItemFromCart= (dispatch, payload) => {
  dispatch({ type: 'cart/removeItem', payload })
}

export { addItemToCart, removeItemFromCart };
