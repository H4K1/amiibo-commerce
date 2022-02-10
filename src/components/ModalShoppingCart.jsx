import Modal from './Modal'
import Button from './Button'

const ModalShoppingCart = ({ children, isHidden=true }) => {
  return (
    <Modal title="My Shopping Cart" isHidden={isHidden}>

      { children }

      <div className="flex items-center space-x-2 rounded-b border-t border-gray-200">
        <Button color="blue" className="mt-3 w-full">Go to checkout</Button>
      </div>
    </Modal>
  )
}

export default ModalShoppingCart;
