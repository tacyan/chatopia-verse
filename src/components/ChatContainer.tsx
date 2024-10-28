import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

interface Message {
  id: number;
  text: string;
  timestamp: Date;
  isOwn: boolean;
}

interface ChatContainerProps {
  messages: Message[];
}

const ChatContainer = ({ messages }: ChatContainerProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message.text}
          timestamp={message.timestamp}
          isOwn={message.isOwn}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatContainer;