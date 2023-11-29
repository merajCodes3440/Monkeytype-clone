import React,{useState} from 'react'
import { CiInstagram,CiLinkedin} from "react-icons/ci";
import { FaGithub,FaRegEnvelope,FaArrowRotateRight } from "react-icons/fa6";
import Select from "react-select";
import { themeOptions } from '../Utils/ThemeOptions';
import { useTheme } from '../context/ThemeContext';

function Footer() {

  const [value,setValue] = useState({})

  const {setTheme} =useTheme();


  const handleChange =(e)=>{
       console.log(e);
       setValue(e.value);
       setTheme(e.value);
  }
  return (
    <div className='footer-main-div'>
      <div className='icons'>
        <span><a href="https://www.wikipedia.org/"><CiInstagram/></a></span>
        <span> <a href="https://www.linkedin.com/in/meraj-arshad-245597244/"><CiLinkedin/></a></span>
        <span> <a href="https://github.com/merajCodes3440"><FaGithub/></a></span>
        <span><a href="mailto:merajarshad184@gmail.com"><FaRegEnvelope/></a></span>
      </div>
      <div className='reset-section'> 
          <div><span><FaArrowRotateRight/></span></div>
          <div>
            <button>esc</button> <span> - res</span>
          </div>
          <div>
            <button>10</button>
            <button>50</button>
            <button>80</button>
            <button>100</button>
            <span>- no of words </span>
          </div>
       </div>
      <div className='theme-changer'>
      <Select
        value={value}
        onChange={handleChange}
        options={themeOptions}
        menuPlacement="top"
      />
      </div>
    </div>
  )
}

export default Footer