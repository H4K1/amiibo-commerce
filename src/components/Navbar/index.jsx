import './style.sass'
import { showModalCart } from '../../redux/modal/action';
import Button from '../Button';
import ShoppingCart from '../ShoppingCart';
import { useSelector, useDispatch } from 'react-redux'
import { sum } from 'lodash';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch()
  const { showShoppingCartModal } = useSelector(state => state)
  const cartItemsQuantity = useSelector(item => item.shoppingCart)?.map(item => item.quantity)
  const shoppingCartCount = sum(cartItemsQuantity)

  return (
    <nav className="nav">
      <Link to="/">
        <div className="nav__section">
          <img
            className="nav__section--image"
            src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Mario_emblem_inverted.svg"
            alt=""
          />
          <span className="nav__section--brand">
            Mario Store
          </span>
        </div>
      </Link>

      <div className="nav__section">
        <div className="nav__section--container">
          <Button onClick={() => dispatch(showModalCart())} className="relative" color="red" badgeValue={shoppingCartCount}>
            <i className="fa-solid fa-bag-shopping"></i>
          </Button>
        </div>
      </div>
      <ShoppingCart visible={showShoppingCartModal} />
    </nav>
  );
};

export default Navbar;