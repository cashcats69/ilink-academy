import React from "react";
import './NoUsers.scss';
export const NoUsers: React.FC = () =>{
  return(
    <div className='no-users'>
    <img src='../../../pages/ChatPage/ChatPageIcons/no-users.svg'></img>
    <p>There is no other users yet</p>
    </div>
  )
}