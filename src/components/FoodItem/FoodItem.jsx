import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, image, description }) => {
    const { cartItems, addToCart, remove } = useContext(StoreContext);

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img src={image} alt={name} className="food-item-img" />
                {!cartItems[id] ? (
                    <img 
                        src={assets.add_icon_white} 
                        className="add" 
                        onClick={() => addToCart(id)} 
                        alt="Add to cart" 
                    />
                ) : (
                    <div className="food-counter">
                        <img 
                            onClick={() => remove(id)} 
                            src={assets.remove_icon_red} 
                            alt="Remove from cart" 
                        />
                        <p>{cartItems[id]}</p>
                        <img 
                            onClick={() => addToCart(id)}  
                            src={assets.add_icon_green} 
                            alt="Add more" 
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-description">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>
        </div>
    );
};

export default FoodItem;
