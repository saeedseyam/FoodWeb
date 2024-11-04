import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../../Context/StoreContext'
const PlaceOrder = () => {
  const {GetTotal} =  useContext(StoreContext)

  return (
    <form className='placeOrder'>
      <div className='placeOrder-left'>
        <p className='title'>Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder='first Name' />
          <input type="text"  placeholder='last Name'/>
        </div>
        <input type="email"  placeholder='email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='city' />
          <input type="text"  placeholder='state'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='zip code' />
          <input type="text"  placeholder='country'/>
        </div>
        <input type="text" placeholder='phone'/>
      </div>
      <div className='placeOrder-right'>
      <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${GetTotal()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${10}</p>
              </div>
              <hr />
              <div className="cart-total-details">
              <p>Total</p>
              <p>${GetTotal()}</p>
              </div>
              <button >Procced To Payment</button>
            </div>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder
