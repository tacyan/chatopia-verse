import { format } from "date-fns";

interface ChatMessageProps {
  message: string;
  timestamp: Date;
  isOwn?: boolean;
}

const ChatMessage = ({ message, timestamp, isOwn = false }: ChatMessageProps) => {
  return (
    <div
      className={`flex ${
        isOwn ? "justify-end" : "justify-start"
      } mb-4 animate-fade-in`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
          isOwn
            ? "bg-gradient-to-r from-primary to-secondary text-white"
            : "bg-gray-100"
        }`}
      >
        <p className="text-sm md:text-base">{message}</p>
        <p className="text-xs mt-1 opacity-70">
          {format(timestamp, "HH:mm")}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;