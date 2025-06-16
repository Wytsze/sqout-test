
import React, { useState } from 'react';
import { AuthForm } from '@/components/AuthForm';
import { Homescreen } from '@/components/Homescreen';
import Teams from './Teams';

type User = {
  email: string;
} | null;

type CurrentView = 'home' | 'teams' | 'players' | 'staff';

const Index = () => {
  const [user, setUser] = useState<User>(null);
  const [currentView, setCurrentView] = useState<CurrentView>('home');

  const handleLogin = (email: string, password: string) => {
    // Simple mock authentication - in a real app, this would validate against a backend
    console.log('Login attempt:', email);
    setUser({ email });
  };

  const handleSignup = (email: string, password: string) => {
    // Simple mock authentication - in a real app, this would create an account
    console.log('Signup attempt:', email);
    setUser({ email });
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('home');
  };

  const handleNavigate = (section: string) => {
    setCurrentView(section as CurrentView);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  // Show auth form if user is not logged in
  if (!user) {
    return <AuthForm onLogin={handleLogin} onSignup={handleSignup} />;
  }

  // Show the appropriate view based on current selection
  switch (currentView) {
    case 'teams':
      return <Teams onBack={handleBackToHome} />;
    case 'players':
      // Placeholder for future players page
      return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-poppins mb-4">Players Section</h1>
            <p className="text-gray-400 mb-4">Coming soon...</p>
            <button 
              onClick={handleBackToHome}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
            >
              Back to Home
            </button>
          </div>
        </div>
      );
    case 'staff':
      // Placeholder for future staff page
      return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-poppins mb-4">Staff Section</h1>
            <p className="text-gray-400 mb-4">Coming soon...</p>
            <button 
              onClick={handleBackToHome}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
            >
              Back to Home
            </button>
          </div>
        </div>
      );
    default:
      return <Homescreen onNavigate={handleNavigate} onLogout={handleLogout} />;
  }
};

export default Index;
