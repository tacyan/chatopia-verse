import { useState } from "react";
import ChatContainer from "@/components/ChatContainer";
import ChatInput from "@/components/ChatInput";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: number;
  text: string;
  timestamp: Date;
  isOwn: boolean;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "こんにちは！",
      timestamp: new Date(),
      isOwn: false,
    },
  ]);
  const { toast } = useToast();

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text,
      timestamp: new Date(),
      isOwn: true,
    };
    setMessages([...messages, newMessage]);
    toast({
      description: "メッセージを送信しました",
      duration: 2000,
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white border-b p-4">
        <h1 className="text-xl font-semibold text-center">チャット</h1>
      </header>
      <main className="flex-1 flex flex-col max-w-3xl mx-auto w-full bg-white shadow-lg">
        <ChatContainer messages={messages} />
        <ChatInput onSend={handleSendMessage} />
      </main>
    </div>
  );
};

export default Index;