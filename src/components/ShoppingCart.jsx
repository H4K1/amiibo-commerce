import { hideModalCart } from "../redux/modal/action";
import { currencyFormat } from '../helpers'

import { useSelector, useDispatch  } from 'react-redux'
import { sum } from 'lodash'

import Button from "./Button";
import ShoppingCartProduct from "./ShoppingCartProduct";

const ShoppingCart = ({ visible }) => {
  const dispatch = useDispatch()
  let filteredShoppingCart = useSelector(state => state.shoppingCart.filter(item => item.quantity > 0) )
  let allPrices= filteredShoppingCart.map(item => item.price * item.quantity)
  let subtotal = sum(allPrices)

  return (
    <div
      className={`${!visible && 'hidden'} fixed inset-0 overflow-hidden`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2
                    className="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Shopping cart
                  </h2>
                  <div className="ml-3 h-7 flex items-center">
                    <Button
                      onClick={() => dispatch(hideModalCart())}
                      color="none"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <i className="fa-solid fa-x"></i>
                    </Button>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {
                        filteredShoppingCart.map(amiibo => (
                          <ShoppingCartProduct key={amiibo.id} amiibo={amiibo} />
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>{ currencyFormat(subtotal) }</p>
                </div>
                <div className="mt-6">
                  <Button
                    color="blue"
                    className="w-full flex justify-center items-center font-xl"
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
