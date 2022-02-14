const addItemToCart = (payload) => {
  return ({ type: 'cart/addItem', payload })
}

const removeItemFromCart= (payload) => {
  return ({ type: 'cart/removeItem', payload })
}

export { addItemToCart, removeItemFromCart };
