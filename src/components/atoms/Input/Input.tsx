import React from 'react';
import classNames from 'classnames'
import './Input.scss'
interface Input{
headerText: string,
placeholderText: string,
inputType:string,
className: string
inputName:string,
// onChange: (React.ChangeEvent<HTMLInputElement>,
}
const passworHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
console.log(event.target.value)
}
const loginHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
console.log(event.target.value)
}
export const Input: React.FC<Input> = ({headerText,placeholderText,inputType,className,inputName}) => {
  const classes = classNames(
    'input-user',
    className,
  )
  return(
    <div className='container'>
      <p>{headerText}</p>
      <input type={inputType} name={inputName} className={classes} placeholder={placeholderText} onChange={(inputName === 'name') ? (event => loginHandler(event)) : (event => passworHandler(event))}/>
      <p className="wrong">Something goes wrong</p>
    </div>
  )
}