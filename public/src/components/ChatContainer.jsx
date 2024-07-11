import React, { useState } from "react";
import styled from "styled-components";
import Logout from "./Logout";

export default function ChatContainer({ currentChat }) {
  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <img
              src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
              alt="avatar"
            />
          </div>
          <div className="username">
            <h3>{currentChat.username}</h3>
          </div>
        </div>
        <Logout />
      </div>
      <div className="chat-messages"></div>
      <div className="chat-input"></div>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 1rem;;
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
`;

// import React, { useState } from 'react';
// import styled from 'styled-components';

// export default function ChatContainer({ currentUser }) {
//   const [messages, setMessages] = useState([
//     { sender: 'other', content: 'Hello!' },
//     { sender: 'currentUser', content: 'Hi there!' },
//     { sender: 'other', content: 'How are you?' }
//   ]);
//   const [newMessage, setNewMessage] = useState('');

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       setMessages([...messages, { sender: 'currentUser', content: newMessage }]);
//       setNewMessage('');
//     }
//   };

//   return (
//     <Container>
//       <MessagesContainer>
//         {messages.map((message, index) => (
//           <Message key={index} isCurrentUser={message.sender === 'currentUser'}>
//             <Content isCurrentUser={message.sender === 'currentUser'}>{message.content}</Content>
//           </Message>
//         ))}
//       </MessagesContainer>
//       <MessageInputContainer>
//         <Input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <Button onClick={handleSendMessage}>Send</Button>
//       </MessageInputContainer>
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   width: 100%;
//   background-color: #121212;
//   color: #ffffff;
// `;

// const MessagesContainer = styled.div`
//   flex: 1;
//   padding: 1rem;
//   overflow-y: auto;
// `;

// const Message = styled.div`
//   display: flex;
//   justify-content: ${(props) => (props.isCurrentUser ? 'flex-end' : 'flex-start')};
//   margin-bottom: 1rem;
// `;

// const Content = styled.div`
//   background-color: ${(props) => (props.isCurrentUser ? '#4e0eff' : '#333333')};
//   color: ${(props) => (props.isCurrentUser ? '#ffffff' : '#ffffff')};
//   padding: 0.75rem;
//   border-radius: 1rem;
//   max-width: 60%;
//   word-wrap: break-word;
// `;

// const MessageInputContainer = styled.div`
//   display: flex;
//   padding: 0.5rem;
//   background-color: #1e1e1e;
//   border-top: 1px solid #333333;
// `;

// const Input = styled.input`
//   flex: 1;
//   padding: 0.75rem;
//   border: none;
//   border-radius: 0.5rem;
//   margin-right: 0.5rem;
//   font-size: 1rem;
//   background-color: #333333;
//   color: #ffffff;

//   &::placeholder {
//     color: #aaaaaa;
//   }
// `;

// const Button = styled.button`
//   padding: 0.75rem 1rem;
//   background-color: #4e0eff;
//   color: #ffffff;
//   border: none;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   font-size: 1rem;

//   &:hover {
//     background-color: #3d0ccf;
//   }
// `;
