import { showModalCart } from '../redux/modal/action';
import Button from './Button';
import ShoppingCart from './ShoppingCart';
import { useSelector, useDispatch } from 'react-redux'
import { sum } from 'lodash';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch()
  let { showShoppingCartModal } = useSelector(x => x)
  let cartItemsQuantity= useSelector(x => x.shoppingCart)?.map(item => item.quantity)
  let shoppingCartCount = sum(cartItemsQuantity)

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between flex-wrap bg-white px-6 py-4">
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-gray-700 mr-6">
          <img
            className="max-w-sm mr-3"
            src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Mario_emblem_inverted.svg"
            alt=""
          />
          <span className="font-semibold text-2xl tracking-tight">
            Mario Store
          </span>
        </div>
      </Link>

      <div className="flex items-center flex-shrink-0 text-gray-700 mr-6">
        <div className="items-center">
          <Button onClick={ () => dispatch(showModalCart()) } className="relative" color="red" badgeValue={shoppingCartCount}>
            <i className="fa-solid fa-bag-shopping"></i>
          </Button>
        </div>
      </div>
      <ShoppingCart visible={showShoppingCartModal}/>
    </nav>
  );
};

export default Navbar;
