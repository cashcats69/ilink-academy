import React from "react";
import './UserOnline.scss';
interface UserOnline{
  userImage: string,
  userName: string,
  lastMessage: string,
}
export const UserOnline: React.FC<UserOnline> = ({userImage,userName,lastMessage}) => {
return(
  <div className='user'>
<div>
<img src={userImage}/>
</div>
<div className="user-info">
<h1>{userName}</h1>
<p>{lastMessage}</p>
</div>
  </div>
)
}