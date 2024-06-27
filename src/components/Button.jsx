import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export function Button({ text }) {
  return (
    <Link to='/contact'>
        <button className='btn1'>{ text }</button>
    </Link>
  )
}

