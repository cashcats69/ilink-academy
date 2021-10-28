import React from 'react';
import { Header } from '../../components/Molecules/Header/Header';
import { UserList } from '../../components/Molecules/UserList/UserList';
import './ChatPage.scss';
export const ChatPage: React.FC = () =>{
  return(
<div >
  <Header/>
  <UserList/>
</div>
  )
}