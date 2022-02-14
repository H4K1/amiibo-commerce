const showModalCart = (dispatch) => {
  dispatch({ type: 'modal/show_cart', payload: true })  
}

const hideModalCart = (dispatch) => {
  dispatch({ type: 'modal/show_cart', payload: false })  
}

export { showModalCart, hideModalCart };
