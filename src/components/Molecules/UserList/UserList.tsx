import React, {useState} from "react";
import { UserOnline } from "../../atoms/UserOnline/UserOnline";
import { NoUsers } from "../../atoms/NoUsers/NoUsers";
import database from "../../../database";
import './UserList.scss';
export const UserList: React.FC = () => {
  interface users{
    id:string
    userImage:string,
    userName:string,
    lastMessage:string,
  }
  const[users,setUsers] = useState(database)
  console.log(users)
  if(users[0].id !== ''){
  return(
<div className='user-list'>
  { users.map((u:users) => {return(
    <UserOnline key={u.id} userImage={u.userImage} userName={u.userName} lastMessage={u.lastMessage}/>
  )})}
</div>
  )} else {
    return(
      <div className='user-list'>
      <NoUsers/>
      </div>
  )}
}