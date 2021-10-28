import React from 'react';
import './Form.scss';
import {Input} from '../../atoms/Input/Input';
import {Button} from '../../atoms/Button/Button';
export const Form: React.FC = () => {

  return(
    <div className='form-login'>
    <div className='company-svg'></div>
    <h1>Welcome to <span className='color-text'>Chatty</span><span className='color-symbol'>!</span>
    </h1>
    <h2>Please, authorize yourself</h2>
    <Input headerText='User name' placeholderText='Input user name' inputType='text' inputName='name' className='user-input' />
    <Input headerText='Password' placeholderText='Input Password' inputType='text' inputName='password' className='user-input' />
    <Button childrenProp='Log In'/>
    </div>
  )
};