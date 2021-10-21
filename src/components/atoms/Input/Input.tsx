import React from 'react';
import './Input.scss'
function Input(){
  return(
    <div className='container'>
      <p>User name</p>
      <input type="text" name="name" className="input-user" placeholder="Input user name" />
      <p className="wrong">Something goes wrong</p>
    </div>
  )
}
export default Input;