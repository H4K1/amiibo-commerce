import localStorage from '../../services/localStorage';

const cartAddItem = (state, action) => {
  let newCart = [];

  const existsProductInCart = state.filter(item => item.id == action.payload.id).length

  if (existsProductInCart) {
    newCart = state.map((item) => {
      return item.id == action.payload.id ? { ...item, quantity: (item.quantity + 1) } : item
    });
  } else {
    newCart = state.concat(action.payload);
  }

  localStorage.saveData('shopping_cart', newCart)
  return [...newCart];
};

const cartRemoveItem = (state, action) => {
  let newCart = state.map((item) => {
    return item.id == action.payload.id ? { ...item, quantity: (item.quantity - 1 ) } : item
  });

  localStorage.saveData('shopping_cart', newCart)
  return [...newCart];
};

export { cartAddItem, cartRemoveItem };
