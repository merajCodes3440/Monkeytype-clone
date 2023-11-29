import React from 'react'
import { useTestMode } from '../context/TestModeContext'

function UpperManu({countDown}) {

  const {setTestTime} =useTestMode();
  
  const updateTime =(e)=>{
       setTestTime(Number(e.target.id));
  }
  return (
    <div className="row-1">
             <div>{countDown}</div>
             <div className='modes'>
                <div className="timemode" id={15} onClick={updateTime}>15s</div>
                <div className="timemode" id={30} onClick={updateTime}>30s</div>
                <div className="timemode" id={60} onClick={updateTime}>60s</div>
             </div>
         </div>
  )
}

export default UpperManu