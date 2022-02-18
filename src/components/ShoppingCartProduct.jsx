import { currencyFormat } from '../helpers';
import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
} from '../redux/shoppingCart/action';
import { object } from 'prop-types';

const ShoppingCartProduct = ({ amiibo }) => {
  const { quantity, name, price, image, amiiboSeries } = amiibo;
  const dispatch = useDispatch()

  return (
    <li className="py-6 flex">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <img
          src={image}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="w-full h-full object-center object-contain "
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{name}</a>
            </h3>
            <p className="ml-4">{currencyFormat(price)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{amiiboSeries}</p>
        </div>
        <div className="flex-1 flex items-center justify-end text-sm">
          <i
            onClick={() => dispatch(removeItemFromCart(amiibo))}
            className="text-xl cursor-pointer fa-solid fa-circle-minus"
          ></i>
          <span className="mx-4 text-gray-500">{dispatch, quantity}</span>
          <i
            onClick={() => dispatch(addItemToCart(amiibo))}
            className="text-xl cursor-pointer fa-solid fa-circle-plus"
          ></i>
        </div>
      </div>
    </li>
  );
};

ShoppingCartProduct.propTypes = {
  amiibo: object
}

export default ShoppingCartProduct;
