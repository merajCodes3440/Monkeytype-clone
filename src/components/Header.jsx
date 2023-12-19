import React from 'react'
import { TiKeyboard } from "react-icons/ti";
import AccountCircle from './AccountCircle';

function Header() {
  return (
    <div className='header-main-div'>
        <div>
            <span className='logo'>Typing Cat</span>
            <span><TiKeyboard/></span>
        </div>
        <div>
          <span><AccountCircle/></span>
        </div>
    </div>
  )
}

export default Header