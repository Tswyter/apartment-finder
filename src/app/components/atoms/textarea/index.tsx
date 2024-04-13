import styles from '../../../page.module.css';

interface TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ value, onChange }: TextareaProps) => {
  return (
    <section className={styles.chatInput}>
      <textarea value={value} onChange={onChange} />
    </section>
  );
};

export default Textarea;
