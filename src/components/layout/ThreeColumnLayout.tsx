
import React from 'react';

interface ThreeColumnLayoutProps {
  leftPanel: React.ReactNode;
  mainContent: React.ReactNode;
  rightPanel: React.ReactNode;
  className?: string;
}

export const ThreeColumnLayout: React.FC<ThreeColumnLayoutProps> = ({
  leftPanel,
  mainContent,
  rightPanel,
  className = ''
}) => {
  return (
    <div className={`min-h-screen bg-gray-900 text-white ${className}`}>
      <div className="flex h-screen">
        {/* Left Panel - Navigation & Filters */}
        <div className="w-64 lg:w-72 xl:w-80 bg-gray-800/50 border-r border-gray-700 overflow-y-auto">
          {leftPanel}
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {mainContent}
        </div>
        
        {/* Right Panel - Context */}
        <div className="w-64 lg:w-72 xl:w-80 bg-gray-800/50 border-l border-gray-700 overflow-y-auto hidden lg:block">
          {rightPanel}
        </div>
      </div>
    </div>
  );
};
