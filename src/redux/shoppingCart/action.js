const addItemToCart = (payload) => {
  return { type: 'cart/addItem', payload }
}

const removeItemFromCart = (payload) => {
  return { type: 'cart/removeItem', payload }
}

const resetCart = { type: 'cart/reset' }

export { addItemToCart, removeItemFromCart, resetCart };
