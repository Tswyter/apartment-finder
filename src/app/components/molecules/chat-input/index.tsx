'use client';

import { useState } from 'react';
import Textarea from '../../atoms/textarea';
import styles from './styles.module.css';

interface ChatInputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: () => void;
}

const ChatInput = ({ value, onChange, onSubmit }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState(value || '');
  
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.chatInput}>
      <Textarea value={inputValue} onChange={handleChange} />
      <p>This is a legal disclaimer <a href="">Legal Disclaimer</a>.</p>
    </form>
  );
};

export default ChatInput;
