import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category , setcategory}) => {
  return (
    <div className='Explore-Menu' id='ExploreMenu'>
      <h1>Explore our Menu</h1>
      <p className='Explore-Menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolore, officia qui veniam deserunt similique.</p>
      <div className="Explore-Menu-list">
        {menu_list.map((item , index)=>{
            return (
                <div onClick={()=>{
                    setcategory(prev => prev === item.menu_name? 'all'  : item.menu_name)

                }} key={index} className="explore-menu-items">
                    <img className= {category === item.menu_name ? 'active' : ''} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
