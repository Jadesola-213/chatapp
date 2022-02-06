import { ChatEngine } from 'react-chat-engine';

import ChatContent from './components/ChatContent';
import Login from './components/Login';
import './App.css';

const projectID = 'b7f4bda5-2a4e-4976-9804-5c2fa6718db8';

const App = () => {
  if (!localStorage.getItem('username')) return <Login />;

  return (
    <ChatEngine
      height="100vh"
      projectID= "b7f4bda5-2a4e-4976-9804-5c2fa6718db8"
      userName= "chatapp"
      userSecret= "Jadesola213$"
      renderChatContent={(chatAppProps) => <ChatContent {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
