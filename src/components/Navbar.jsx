import { useState, useEffect } from "react";
import { showModalCart } from "../redux/modal/action";
import Button from "./Button";
import ShoppingCart from "./ShoppingCart";
import { useSelector, useDispatch } from 'react-redux'
import { sum } from 'lodash';

const Navbar = () => {
  const dispatch = useDispatch()
  let show = useSelector(x => x.showShoppingCartModal)
  let cartItemsQuantity= useSelector(x => x.shoppingCart)?.map(item => item.quantity)
  let shoppingCartCount = sum(cartItemsQuantity)

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between flex-wrap bg-white px-6 py-4">
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

      <div className="flex items-center flex-shrink-0 text-gray-700 mr-6">
        <div className="items-center">
          <Button onClick={ () => showModalCart(dispatch) } className="relative" color="red" badgeValue={shoppingCartCount}>
            <i className="fa-solid fa-bag-shopping"></i>
          </Button>
        </div>
      </div>
      <ShoppingCart visible={show}/>
    </nav>
  );
};

export default Navbar;
