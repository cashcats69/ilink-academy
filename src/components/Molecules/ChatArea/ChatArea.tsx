import React, {useState} from "react";
import './ChatArea.scss'
export const ChatArea: React.FC = () => {
  const[messages,setMessages] = useState({
    you:'',
    otherUser:'',
  })
  return(
    <div className='chat-area'>
      <div className='choose-chat'> <p>Select a chat to stary messaging</p></div>
    </div>
  )
}