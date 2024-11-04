import React , {useContext} from 'react'
import {StoreContext} from '../../../Context/StoreContext'
import './Cart.css'
import { food_list } from '../../../assets/assets';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cartItems, food_list , addToCart, remove , GetTotal } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
        <div className="CartItems">
          <div className="CartItemsTitle">
           <p>Items</p>
           <p>Titles</p>
           <p>Price</p>
           <p>Quantity</p>
           <p>Total</p>
           <p>remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item , index) => {
            if(cartItems[item._id] > 0){
              return (
                <>
                <div className="card-items-title card-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick={()=>remove(item._id)} className='cross'>X</p>
                </div>
                <hr/>
                </>
              )
            }
          })}
        </div>
        <div className="cart-btn">
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
              <button onClick={()=>navigate('/order')}>Procced To Chechout</button>
            </div>
          </div>
          <div className="Cart-promocode">
            <div>
              <p>if You  have a promocode ,  enter it here</p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='promo Code' name="" id="" />
                <button>sumbit</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart
