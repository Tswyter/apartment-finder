interface ChatHeaderProps {
  name: string;
}

const ChatHeader = ({ name }: ChatHeaderProps) => {
  return (
    <section className="chatHeader">
      <h1>{name}</h1>
    </section>
  );
};

export default ChatHeader;
