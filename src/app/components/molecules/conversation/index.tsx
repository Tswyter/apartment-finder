import Message, { MessageProps } from '../../atoms/message';
import styles from './styles.module.css';

interface ConversationProps {
  messages: MessageProps[];
}

const Conversation = ({ messages }: ConversationProps) => {
  return (
    <div className={styles.chatConversation}>
      {messages.map((message, index) => (
        <Message key={index} message={message.message} author={message.author} /> // Fix: Pass the 'message' property of the 'message' object
      ))}
    </div>
  );
};

export default Conversation;
