import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface MainLayoutProps {
  leftPanel: React.ReactNode;
  mainContent: React.ReactNode;
  rightPanel: React.ReactNode;
  onLogout?: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  leftPanel,
  mainContent,
  rightPanel,
  onLogout
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="hidden lg:flex lg:w-64 xl:w-72 bg-[#2D3B69] text-white flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-600">
          <h1 className="text-2xl font-bold">SQOUT</h1>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <NavItem icon="🏠" label="Home" active />
            <NavItem icon="📋" label="My Requests" />
            <NavItem icon="📝" label="My Lists" />
            <NavItem icon="💼" label="My Portfolio" />
            <NavItem icon="📊" label="Reports" />
            <NavItem icon="⚽" label="Match center" badge="Coming soon" />
          </div>
        </nav>

        {/* Bottom Navigation */}
        <div className="p-4 border-t border-gray-600 space-y-2">
          <NavItem icon="⚙️" label="Settings" />
          <NavItem icon="❓" label="Help & Contact" />
          <button 
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-700 rounded-lg transition-colors"
          >
            <span>🚪</span>
            <span>Login</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="w-64 h-full bg-[#2D3B69] text-white">
            <div className="p-4 flex justify-between items-center border-b border-gray-600">
              <h1 className="text-xl font-bold">SQOUT</h1>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:bg-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <nav className="p-4">
              <div className="space-y-2">
                <NavItem icon="🏠" label="Home" active />
                <NavItem icon="📋" label="My Requests" />
                <NavItem icon="📝" label="My Lists" />
                <NavItem icon="💼" label="My Portfolio" />
                <NavItem icon="📊" label="Reports" />
                <NavItem icon="⚽" label="Match center" badge="Coming soon" />
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Center Column */}
        <div className="flex-1 bg-white">
          {/* Top Search Bar */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search players, teams..."
                  className="pl-10 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              
              <Button variant="ghost" size="sm" className="text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white border-b border-gray-200 px-4">
            <div className="flex space-x-1">
              <TabButton label="Players" active />
              <TabButton label="Teams" />
              <TabButton label="Staff" />
            </div>
          </div>

          {/* Left Panel Content */}
          <div className="h-[calc(100vh-120px)] overflow-y-auto">
            {leftPanel}
          </div>
        </div>

        {/* Right Column - Main Content */}
        <div className="flex-1 lg:flex-[2] bg-white border-l border-gray-200">
          <div className="h-[calc(100vh-60px)] overflow-y-auto">
            {mainContent}
          </div>
        </div>

        {/* Far Right Column - Context Panel */}
        <div className="hidden xl:block xl:w-80 bg-white border-l border-gray-200">
          <div className="h-[calc(100vh-60px)] overflow-y-auto">
            {rightPanel}
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
  active?: boolean;
  badge?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, badge }) => (
  <div className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
    active ? 'bg-green-600 text-white' : 'hover:bg-gray-700'
  }`}>
    <div className="flex items-center space-x-3">
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
    {badge && (
      <span className="text-xs bg-gray-600 px-2 py-1 rounded-full">
        {badge}
      </span>
    )}
  </div>
);

interface TabButtonProps {
  label: string;
  active?: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ label, active }) => (
  <button className={`px-6 py-3 font-medium border-b-2 transition-colors ${
    active 
      ? 'text-green-600 border-green-600' 
      : 'text-gray-600 border-transparent hover:text-gray-900'
  }`}>
    {label}
  </button>
);