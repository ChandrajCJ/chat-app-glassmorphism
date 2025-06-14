import React from 'react';
import { UserProvider, useUser } from './contexts/UserContext';
import UserSelection from './components/UserSelection';
import ChatContainer from './components/ChatContainer';

const ChatApp: React.FC = () => {
  const { currentUser } = useUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float-slow"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 left-20 w-60 h-60 bg-violet-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-drift"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-drift-reverse"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Smaller accent orbs */}
        <div className="absolute top-10 right-1/3 w-20 h-20 bg-emerald-400 rounded-full mix-blend-multiply filter blur-lg opacity-25 animate-bob"></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-amber-400 rounded-full mix-blend-multiply filter blur-lg opacity-25 animate-bob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-10 w-32 h-32 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-18 animate-sway"></div>
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-18 animate-sway" style={{ animationDelay: '4s' }}></div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-pink-900/15 via-transparent to-violet-900/15 animate-gradient-shift-reverse"></div>
      </div>
      
      {currentUser ? (
        <ChatContainer currentUser={currentUser} />
      ) : (
        <UserSelection />
      )}
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <ChatApp />
    </UserProvider>
  );
}

export default App;