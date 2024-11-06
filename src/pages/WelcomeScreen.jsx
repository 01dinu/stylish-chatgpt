import React from 'react';

export default function WelcomeScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#2a2b32]">
      <div className="text-center">
        <h1 className="text-white text-2xl mb-4">Welcome to ChatterBot</h1>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700">
            Log in
          </button>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
