import React from "react";
import{FaShoppingCart, FaHeart, FaUser} from  'react-icons/fa';

const Carticons =()=>{
    return (
        <div className = 'IconsBar'>     
            <a href="/cart" className="icon-link"> <FaShoppingCart size={20} color="white" />
            </a>
            <a href="/wishlist" className="icon-link"><FaHeart size={20} color="white" />
            </a>
            <a href="/profile" className="icon-link"><FaUser size={20} color="white" />
            </a>
          </div>
        )    
}

export default Carticons;