import React from 'react';
import { Header } from '../../components/Molecules/Header/Header';
import { UserList } from '../../components/Molecules/UserList/UserList';
import { ChatArea } from '../../components/Molecules/ChatArea/ChatArea';
import './ChatPage.scss';
export const ChatPage: React.FC = () =>{
  return(
<div className='chat-page'>
  <Header/>
  <div className='users-n-chat'><UserList/>
  <ChatArea/>
  </div>
  
</div>
  )
}