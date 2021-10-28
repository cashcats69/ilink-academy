import React from 'react';
import classNames from 'classnames';
import './Button.scss'
interface Button{
childrenProp?: string,
disabled?: boolean, 
onClick?: (e: React.MouseEvent<HTMLElement>) => void, 
className?: string, 
active?: boolean
}
export const Button: React.FC<Button> = ({childrenProp, onClick, className, disabled, active}) => {

  const classes = classNames(
    'btn-login',
    className,
    {active}
  )
  return(
    <button className={classes} disabled={disabled} onClick={onClick}>
      {childrenProp}
    </button>
  )
};