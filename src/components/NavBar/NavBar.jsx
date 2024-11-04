import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import Cart from '../pages/Cart/Cart'
import { Link } from 'react-router-dom'
import {StoreContext} from '../../Context/StoreContext'
const NavBar = ({setShowLogin}) => {
    const  [active, setActive] = useState('home')
    const {GetTotal} = useContext(StoreContext)
  return (
    <div className='NavBar'>
      <Link to='/'><div className="logo">FavFood</div></Link>

      <ul className="navBarMenu">
        <Link to= '/' onClick={()=>setActive('home')} className={active === 'home' ? 'active' : ''}>home</Link>
        <a href='#ExploreMenu' onClick={()=>setActive('menu')} className={active === 'menu' ? 'active': ''}>menu</a>
        <a href='#footer' onClick={()=>setActive('Contact')} className={active === 'Contact' ? 'active': ''}>Contact us</a>
      </ul>
      <div className="navBar-right">
        <div className="NavBar-search-icon">
            <Link to= '/Cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={GetTotal()? 'dot': '' }></div>
        </div>
        <button onClick={()=>setShowLogin(true)} className="navBar-btn">sign in</button>

      </div>
    </div>
  )
}

export default NavBar
