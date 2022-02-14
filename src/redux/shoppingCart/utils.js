const cartAddItem = (state, action) => {
  let newCart = [];
  const haveProductInCart = (payload) => {
    let myCart = state.filter((item) => item.id == payload.id);
    return !!myCart.length;
  };

  if (haveProductInCart(action.payload)) {
    newCart = state.map((item) => {
      if (item.id == action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  } else {
    newCart = state.concat(action.payload);
  }

  return [...newCart];
};

const cartRemoveItem = (state, action) => {
  let myCart = state.map((item) => {
    if (item.id == action.payload.id && item.quantity >= 1) {
      return { ...item, quantity: item.quantity - 1 };
    }

    if (item.id == action.payload.id && item.quantity < 1) {
      return { ...item, quantity: 0 };
    }

    return item;
  });

  return [...myCart];
};

export { cartAddItem, cartRemoveItem };
