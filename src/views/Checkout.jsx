import ShoppingCartProduct from '../components/ShoppingCartProduct'
import Container from '../components/Container' 
import Card from '../components/Card'
import Button from '../components/Button'
import ModalFinalizeOrder from '../components/ModalFinalizeOrder'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { currencyFormat } from '../helpers'
import { sum } from 'lodash'

const Checkout = () => {
const shoppingCartItems = useSelector(x => x.shoppingCart).filter( item => item.quantity > 0 )
const [show, setShow] = useState(false)
const subTotal = shoppingCartItems.map(item => item.price * item.quantity)
const total = sum(subTotal)


  return(
    <Container>
      <ModalFinalizeOrder visible={show} />
      <div className="flex grid grid-cols-12 gap-2 my-2">
        <div  className="flex flex-col items-center w-full col-span-12 mx-auto md:col-span-6">
          {
            shoppingCartItems.map(amiibo => (
              <Card key={amiibo.id} className='w-full px-3' maxWidth='32rem'>
                <ShoppingCartProduct amiibo={ amiibo }/>
              </Card>
            ))
            }
        </div>

        <div  className="w-full col-span-12 md:col-span-6">
          <Card maxWidth="100%" className="px-2 divide-y" >
            <h2 className='py-3 px-2 text-xl font-semibold'>Order summary</h2>

            <div className="py-3 flex justify-between px-4">
              <div>Subtotal</div>
              <div className='font-bold'>{ currencyFormat(total) }</div>
            </div>

            <div className='py-3 flex justify-between px-4'>
              <span className='mr-4'>Total</span>
              <span className='font-bold'>{ currencyFormat(total) }</span>
            </div>
            
            <Button onClick={ () => setShow(true) } className='my-2 w-full' color='blue'>
              Go to payment
            </Button>
          </Card>
        </div>
      </div>
    </Container>
    )
}

export default Checkout
