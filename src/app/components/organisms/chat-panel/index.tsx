import ChatHeader from '../../molecules/chat-header'; 
import Conversation from '../../molecules/conversation';
import ChatInput from '../../molecules/chat-input';

import styles from './styles.module.css';

const ChatPanel = () => {
  const messagesArray = Array(10).fill({ message: 'test', author: 'user' })
    .map((message, index) => {
      return {
        ...message,
        author: index % 2 === 0 ? 'user' : 'bot',
      }
    });

  return (
    <aside className={styles.chatPanel}>
      <ChatHeader name="Chat" />
      <Conversation messages={messagesArray} />
      <ChatInput  />
    </aside>
  );
}

export default ChatPanel;