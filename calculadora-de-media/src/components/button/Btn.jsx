import React from 'react'
import './Btn.css'
import { Link } from 'react-router-dom';

const Btn = ({ titulo, link }) => {
  return (
    <div className='botao'>
        <Link to={link}>{titulo}</Link>
    </div>
  )
}

export default Btn
