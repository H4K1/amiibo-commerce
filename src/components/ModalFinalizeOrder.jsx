import Button from './Button';
import localStorage from '../services/localStorage';
import {bool} from 'prop-types';

const ModalFinalizeOrder = ({ visible = false }) => {
const finalizeOrder = () => {
  localStorage.saveData('shopping_cart', [])
}
  return (
    <div id="defaultModal" aria-hidden="true" className={ ` ${!visible && 'hidden'} bg-opacity-60 flex bg-gray-200 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-full inset-0` }>
        <div className="mx-auto absolute px-4 w-full max-w-2xl">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex justify-center items-center p-5 rounded-t border-b dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                      Order alert
                    </h3>
                </div>
                <div className="p-6 space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Your order are generated succesfully
                    </p>
                </div>
                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  <a href='/'>
                    <Button onClick={ finalizeOrder } className='w-full' color='green'>Go to Home</Button>
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

ModalFinalizeOrder.propTypes = {
  visible: bool
}
export default ModalFinalizeOrder;
