import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className='gpt3__navbar_links'>
        <div className='gpt3__navbar_links_logo'>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default navbar