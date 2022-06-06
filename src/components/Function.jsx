import React from 'react'
import "./style.css"
function Function() {
    const mystyle={
        color:"red",
    }
  return (
    <div>
        <ul style={mystyle}>
            <li className='none'><h2>Mobile Operating System</h2>
                <ul>
                <li>Android</li>
            <li>Blackberry</li>
            <li>iPhone</li>
            <li>Windows Phone</li>
                </ul>
            </li>
            
        </ul>
    </div>
  )
}

export default Function