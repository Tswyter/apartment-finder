import styles from './styles.module.css';

export interface MessageProps {
  message: string;
  author: string;
}

const Message = ({ message, author }: MessageProps) => {
  return (
    <div className={styles.chatMessage}>
      <h2>{author}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Message;