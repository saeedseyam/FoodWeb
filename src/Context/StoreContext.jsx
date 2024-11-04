import { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemID) => {
        if (!cartItems[itemID]) {
            setCartItems((prev) => ({...prev, [itemID]:1 }));
        } else {
            setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1 }));
        }
    };

    const remove = (itemID) => {
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    };
    
    const GetTotal = () => {
        let total = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0)
           {
            let itemInfo = food_list.find((product)=> product._id === item)
            total +=  itemInfo.price * cartItems[item]
           }
        }
        return total
    }

    const ConTextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        remove,
        GetTotal,
    };

    return (
        <StoreContext.Provider value={ConTextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
