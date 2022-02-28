const showModalCart = () => {
  return ({ type: 'modal/show_cart', payload: true })
}

const hideModalCart = () => {
  return ({ type: 'modal/show_cart', payload: false })
}

export { showModalCart, hideModalCart };
