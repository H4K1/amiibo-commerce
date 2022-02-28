import localStorage from '../../services/localStorage';

const SHOPPING_CART_STORAGE = 'shopping_cart'

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

  localStorage.saveData(SHOPPING_CART_STORAGE, newCart)
  return [...newCart];
};

const cartRemoveItem = (state, action) => {
  const newCart = state.map((item) => {
    return item.id == action.payload.id ? { ...item, quantity: (item.quantity - 1) } : item
  });

  localStorage.saveData(SHOPPING_CART_STORAGE, newCart)
  return [...newCart];
};

const cartReset = (state) => {
  let newState = []
  localStorage.saveData(SHOPPING_CART_STORAGE, newState)
  return newState
}

export { cartAddItem, cartRemoveItem, cartReset };
