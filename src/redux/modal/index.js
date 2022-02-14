import { showModalCart } from "./utils";

const modalReducer = (state=false, action) => {
  switch (action.type) {
    case 'modal/show_cart':
      return showModalCart(state, action)
    default:
      return state
  }
}

export default modalReducer;
