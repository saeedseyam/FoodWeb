import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
const Home = () => {
  const [category , setcategory] = useState ("all")
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
