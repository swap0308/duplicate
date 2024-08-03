import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram,FaPinterest,FaYoutube,FaShoppingCart, FaHeart, FaUser} from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className = 'IconsBar'>
         <span className='follow-text'>Follow us:</span>
         
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={20} color="white"/>
      </a>

      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={20} color='white'/>
      </a>

      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={20} color='white'/>
      </a>

      <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
        <FaPinterest size={20} color="white" />
      </a>

      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={20} color="white" />
      </a>

      <div className='vertical-line'></div>
      <select className='dropdown'>
        <option value="en">Eng</option>
        <option value="es">Spa</option>
        <option value="fr">Fre</option>
       
      </select>
      <select className='dropdown'>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
      </select>

    </div>
  );
};

export default SocialIcons;
