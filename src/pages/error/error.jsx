import React from 'react'
import './error.css'
import img from '../../assets/images/error404.png'
import {Link} from 'react-router-dom'
const Error = () => {

  return (
    <div className='error-wrapper'>
      <img src={img} />
      <h1>Página não encontrada</h1>
      <p>Libero tellus nulla facilisi aliquam pellentesque lobortis gravida ipsum eros tellus feugiat nunc cras.</p>
      <button><Link style={{textDecoration: 'none', borderBottom: 'none'}} to="/">Voltar ao início</Link></button>
    </div>
  )
}

export default Error
