import React from 'react'
import { TiKeyboard } from "react-icons/ti";
import { TiUser } from "react-icons/ti";

function Header() {
  return (
    <div className='header-main-div'>
        <div>
            <span className='logo'>Typing Cat</span>
            <span><TiKeyboard/></span>
        </div>
        <div>
          <span><TiUser/></span>
        </div>
    </div>
  )
}

export default Header