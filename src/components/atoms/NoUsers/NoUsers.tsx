import React from "react";
import './NoUsers.scss';
export const NoUsers: React.FC = () =>{
  return(
    <div className='no-users'>
    <div className='no-users-logo'></div>
    <p>There is no other users yet</p>
    </div>
  )
}