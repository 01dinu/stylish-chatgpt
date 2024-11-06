// src/pages/Welcome.jsx
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Sun,
  Diamond,
  ExternalLink,
  LogOut,
  Plus,
  ArrowRight,
  Locate,
  Sparkles,
} from "lucide-react";

export default function Welcome() {
  const chatHistory = [
    "How to write an impacting ...",
    "Web accessibility",
    "Design inspiration",
    "What is machine learning",
  ];

  return (
    <div className="flex h-screen bg-[#1a1a1a]">
      {/* Sidebar */}
      <div className="w-80 bg-[#202123] p-4 flex flex-col">
        {/* User Profile */}
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#2a2b32] mb-4">
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
            <span className="text-white text-sm">A</span>
          </div>
          <div>
            <div className="text-white text-sm">Antoine Piedanna</div>
            <div className="text-gray-400 text-xs">Free account</div>
          </div>
        </div>

        {/* New Chat Button */}

        {/* Chat History */}
        <div className="flex-grow overflow-y-hidden mb-4">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#2a2b32] text-gray-300 cursor-pointer"
            >
              <MessageSquare size={18} />
              <span className="text-sm truncate">{chat}</span>
            </div>
          ))}
        </div>
        <button className="flex items-center space-x-2 w-full p-3 rounded-lg bg-emerald-600 text-white mb-20 hover:bg-emerald-700">
          <Plus size={18} />
          <span>Start a new chat</span>
        </button>

        {/* Bottom Menu */}
        <div className="border-t border-gray-700 pt-4 space-y-2">
          <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-[#2a2b32] text-gray-300">
            <MessageSquare size={18} />
            <span>Clear all conversations</span>
          </button>
          <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-[#2a2b32] text-gray-300">
            <Sun size={18} />
            <span>Switch Light Mode</span>
          </button>
          <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-[#2a2b32] text-gray-300">
            <img
              src="/spark.svg"
              alt="Arrow icon"
              className=" mb-4 mt-3 w-5 ml-0 text-white"
            />
            <span>Upgrade to GPT Pro</span>
          </button>
          <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-[#2a2b32] text-gray-300">
            <ExternalLink size={18} />
            <span>Updates & FAQ</span>
          </button>
          <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-[#2a2b32] text-red-400">
            <LogOut size={18} />
            <span>Log out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#132721] p-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome to{" "}
            <span className="inline-block px-2 py-1  bg-gradient-to-r from-[#097F4D] to-transparent">
              <span className="typing-text">ChatGPT</span>
            </span>
          </h1>
          <p className="text-gray-400 mb-12">
            The power of AI at your service - Tame the knowledge !
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder='Example : "Explain quantum computing in simple terms"'
              className="w-full p-4 pr-12 rounded-lg bg-[#2a2b32] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-emerald-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-emerald-600 rounded-lg">
              <img src="/send.svg" alt="Arrow icon" className="w-5 h-5" />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <img
                src="/spark.svg"
                alt="Arrow icon"
                className="mx-auto mb-4 text-white"
              />
              <h3 className="text-white font-medium mb-2">Clear and precise</h3>
              <p className="text-gray-400 text-sm">
                Pariatur sint laborum cillum aute consectetur iure.
              </p>
            </div>
            <div className="text-center">
              <Locate size={18} className="mx-auto mb-4 text-white" />
              <h3 className="text-white font-medium mb-2">
                Personalized answers
              </h3>
              <p className="text-gray-400 text-sm">
                Pariatur sint laborum cillum aute consectetur iure.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/up.svg"
                alt="Arrow icon"
                className="mx-auto mb-4 text-white"
              />
              <h3 className="text-white font-medium mb-2">
                Increased efficiency
              </h3>
              <p className="text-gray-400 text-sm">
                Pariatur sint laborum cillum aute consectetur iure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
