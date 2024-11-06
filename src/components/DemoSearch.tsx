import React, { useState, useRef, useEffect } from 'react';
import { Search, Database, MessageSquare, ArrowRight, Bot, User } from 'lucide-react';

type Message = {
  type: 'user' | 'bot';
  content: string;
  sources?: string[];
};

const demoResponses = [
  {
    query: "pricing",
    answer: "Our pricing is structured into three tiers:\n\n1. Starter ($29/month): Perfect for small websites with up to 100,000 searches/month\n2. Pro ($99/month): Ideal for growing businesses with up to 500,000 searches/month\n3. Enterprise ($299/month): For large-scale applications with unlimited searches\n\nAll plans come with a 14-day free trial. Would you like to know more about specific features included in each plan?",
    sources: ["Pricing Page", "Plans Comparison"]
  },
  {
    query: "integration",
    answer: "Integration is straightforward with multiple options:\n\n1. JavaScript snippet: Add our CDN script and initialize with one line\n2. React Component: Import our package and use the <SearchAI> component\n3. REST API: Direct API access for custom implementations\n\nThe basic setup takes less than 5 minutes. Would you like to see code examples?",
    sources: ["Integration Guide", "API Documentation", "Quick Start Guide"]
  },
  {
    query: "features",
    answer: "SearchAI offers powerful features including:\n\n• AI-powered semantic search\n• Real-time content indexing\n• Custom styling options\n• Analytics dashboard\n• Multi-language support\n• Source citations\n• Chat interface\n• Security controls\n\nWhich feature would you like to learn more about?",
    sources: ["Features Overview", "Technical Documentation"]
  },
  {
    query: "security",
    answer: "We take security seriously with multiple layers of protection:\n\n• End-to-end encryption\n• SOC 2 Type II certified\n• GDPR compliant\n• Regular security audits\n• Custom data retention policies\n• Access controls\n\nAll data is encrypted both in transit and at rest.",
    sources: ["Security Whitepaper", "Compliance Documentation"]
  }
];

const findBestResponse = (query: string) => {
  const normalizedQuery = query.toLowerCase();
  return demoResponses.find(r => 
    Object.entries(r).some(([_, value]) => 
      typeof value === 'string' && value.toLowerCase().includes(normalizedQuery)
    )
  );
};

export default function DemoSearch() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: "👋 Hi! I'm your AI assistant. Try asking about our pricing, features, integration, or security!",
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'search' | 'chat'>('search');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userQuery: string) => {
    const response = findBestResponse(userQuery);
    
    if (response) {
      return {
        content: response.answer,
        sources: response.sources
      };
    }

    // Fallback responses for unknown queries
    const fallbackResponses = [
      "I can help you with information about our pricing, features, integration, or security. What would you like to know?",
      "I'm not sure about that specific query, but I can tell you about our search API capabilities, pricing plans, or help with integration questions.",
      "While I don't have specific information about that, I can help you with our pricing, features, security measures, or integration process. What interests you most?"
    ];

    return {
      content: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
      sources: ["General Documentation"]
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userQuery = query.trim();
    setMessages(prev => [...prev, { type: 'user', content: userQuery }]);
    setQuery("");
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const response = generateResponse(userQuery);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: response.content,
        sources: response.sources
      }]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 flex flex-col h-[500px]">
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <div className="flex space-x-2">
          <button
            onClick={() => setMode('search')}
            className={`flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
              mode === 'search'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Search className="h-4 w-4 mr-1.5" />
            Search
          </button>
          <button
            onClick={() => setMode('chat')}
            className={`flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
              mode === 'chat'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <MessageSquare className="h-4 w-4 mr-1.5" />
            Chat
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4 scroll-smooth">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className="flex items-start max-w-[80%] space-x-2">
              {message.type === 'bot' && (
                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="h-4 w-4 text-indigo-600" />
                </div>
              )}
              <div
                className={`rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                {message.sources && (
                  <div className={`mt-2 flex items-center text-xs ${
                    message.type === 'user' ? 'text-gray-200' : 'text-gray-500'
                  }`}>
                    <Database className="h-3 w-3 mr-1" />
                    <span>Sources: {message.sources.join(", ")}</span>
                  </div>
                )}
              </div>
              {message.type === 'user' && (
                <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <User className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="h-4 w-4 text-indigo-600" />
              </div>
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-200 rounded-lg pr-12 pl-4 py-2.5 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-sm"
          placeholder={mode === 'search' ? "Search documentation..." : "Type your message..."}
        />
        <button
          type="submit"
          disabled={!query.trim()}
          className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md transition-colors duration-200 ${
            query.trim()
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}