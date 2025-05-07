"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Minimize2, Maximize2, X } from "lucide-react";

type Message = {
  content: string;
  role: "user" | "assistant";
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI assistant. Ask me anything about Thomas's experience and skills!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (!isMinimized) {
      setTimeout(scrollToBottom, 100);
    }
  }, [isMinimized]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage: Message = { 
        role: "assistant", 
        content: data.message 
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isVisible) {
    return (
      <Button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg"
      >
        Chat with AI
      </Button>
    );
  }

  return (
    <div 
      className={cn(
        "fixed bottom-4 right-4 bg-background border rounded-lg shadow-lg transition-all duration-300",
        isMinimized ? "w-72" : "w-80"
      )}
    >
      {/* Chat Header */}
      <div className="p-3 border-b bg-primary text-primary-foreground rounded-t-lg flex justify-between items-center">
        <h3 className="font-semibold">AI Resume Assistant</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-primary-foreground hover:opacity-80"
          >
            {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-primary-foreground hover:opacity-80"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      {!isMinimized && (
        <div 
          ref={messagesContainerRef}
          className="h-96 overflow-y-auto p-4 space-y-4 scroll-smooth"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "max-w-[80%] rounded-lg p-3",
                message.role === "user"
                  ? "bg-primary text-primary-foreground ml-auto"
                  : "bg-muted"
              )}
            >
              {message.content}
            </div>
          ))}
          {isTyping && (
            <div className="bg-muted max-w-[80%] rounded-lg p-3">
              Typing...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1"
          />
          <Button type="submit" size="sm">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
} 