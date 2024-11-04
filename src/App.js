import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Routes , Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Cart from './components/pages/Cart/Cart'
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
    return (
   <>
   {showLogin ? <Login setShowLogin ={setShowLogin} />  : <></>}
     <div className='app'>

        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          
        </Routes>
    </div>
    <Footer/>
   </>
  )
}

export default App
