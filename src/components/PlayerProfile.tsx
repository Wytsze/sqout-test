import React from 'react';

interface PlayerProfileProps {
  player: any;
}

export const PlayerProfile: React.FC<PlayerProfileProps> = ({ player }) => {
  if (!player) {
    return (
      <div className="p-6 text-center text-gray-500">
        <p>Select a player to view their profile</p>
      </div>
    );
  }

  return (
    <div className="h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <span className="text-xl">⚽</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Nico Manti (25)</h1>
            </div>
          </div>
          <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
              alt="Player"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <button className="mt-4 flex items-center space-x-2 text-white text-opacity-80 hover:text-opacity-100">
          <span>➕</span>
          <span>Add</span>
        </button>
      </div>

      {/* Player Details */}
      <div className="p-6 space-y-6">
        {/* Basic Info Grid */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">Club</h3>
            <p className="text-lg font-semibold text-gray-900">Arouca</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">Position</h3>
            <p className="text-lg font-semibold text-gray-900">Goalkeeper</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">Preferred foot</h3>
            <p className="text-lg font-semibold text-gray-900">Right</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">Height</h3>
            <p className="text-lg font-semibold text-gray-900">195cm</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">Nationality</h3>
            <p className="text-lg font-semibold text-gray-900">Germany</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">Weight</h3>
            <p className="text-lg font-semibold text-gray-900">88kg</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">Born</h3>
            <p className="text-lg font-semibold text-gray-900">2000-02-06</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">Durn</h3>
            <p className="text-lg font-semibold text-gray-900">2000-02-06</p>
          </div>
        </div>

        {/* At a Glance Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">AT A GLANCE</h2>
          
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-1">177</div>
              <div className="text-sm font-medium text-gray-900">Appearances</div>
              <div className="text-xs text-gray-500">Full career</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-1">0</div>
              <div className="text-sm font-medium text-gray-900">International</div>
              <div className="text-xs text-gray-500">Full career</div>
            </div>
          </div>

          {/* Season Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button className="p-2 hover:bg-gray-100 rounded">
              <span>←</span>
            </button>
            <h3 className="font-medium text-gray-900">2024/2025 — Liga Portugal Betolic</h3>
            <button className="p-2 hover:bg-gray-100 rounded">
              <span>→</span>
            </button>
          </div>

          {/* Stats Circles */}
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="85, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-green-600">29/34</span>
                </div>
              </div>
              <div className="text-xs font-medium text-gray-900">Appearances</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="85, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-green-600">29/34</span>
                </div>
              </div>
              <div className="text-xs font-medium text-gray-900">First 11</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="85, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-green-600">29/29</span>
                </div>
              </div>
              <div className="text-xs font-medium text-gray-900">Apps; 11</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-green-600">2610</span>
                </div>
              </div>
              <div className="text-xs font-medium text-gray-900">Min, Played</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};