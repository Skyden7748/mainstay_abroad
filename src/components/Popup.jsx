import React from 'react'
import './Popup.css'

function Popup(props) {
    console.log("Popup trigger value:", props.trigger);
  return ( props.trigger ) ? (
    // setTimeout(() => {
    //     props.setTrigger(false)
    // }, 500),
    <div className='popup'>
        <div className="popup_inner">
        {props.children}
            <button className='close-btn' onClick={() => props.setTrigger(false)  } >
                close</button>
            
        </div>
    </div>
  ) : "";
}

export default Popup