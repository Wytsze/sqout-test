import React from 'react';
import { Player } from '@/types/club';

interface PlayerSearchResultsProps {
  searchTerm: string;
  onPlayerSelect: (player: any) => void;
}

export const PlayerSearchResults: React.FC<PlayerSearchResultsProps> = ({
  searchTerm,
  onPlayerSelect
}) => {
  // Mock player data based on search
  const mockPlayers = [
    {
      id: 'nico1',
      name: 'Nico Schlotterbeck',
      age: 25,
      club: 'Dortmund',
      position: 'Defender',
      avatar: '👤',
      status: 'active'
    },
    {
      id: 'nico2',
      name: 'Nico Elvedi',
      age: 28,
      club: "M'Gladbach",
      position: 'Defender',
      avatar: '👤'
    },
    {
      id: 'nico3',
      name: "Nico O'Reilly",
      age: 20,
      club: 'Man City',
      position: 'Midfielder',
      avatar: '👤'
    },
    {
      id: 'nico4',
      name: 'Nico Manti',
      age: 25,
      club: 'Arouca',
      position: 'Goalkeeper',
      avatar: '👤',
      highlighted: true
    },
    {
      id: 'nico5',
      name: 'Nico Williams',
      age: 22,
      club: 'Athletic',
      position: 'Midfielder',
      avatar: '👤'
    },
    {
      id: 'nico6',
      name: 'Nico Neidhart',
      age: 30,
      club: 'Hansa',
      position: 'Defender',
      avatar: '👤'
    },
    {
      id: 'nico7',
      name: 'Nico Baler',
      age: 20,
      club: 'Darmstadt',
      position: 'Midfielder',
      avatar: '👤'
    },
    {
      id: 'nico8',
      name: 'Nico Ochojski',
      age: 26,
      club: 'Mlipaded',
      position: 'Midfielder',
      avatar: '👤'
    }
  ];

  const filteredPlayers = mockPlayers.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="space-y-2">
        {filteredPlayers.map((player) => (
          <div
            key={player.id}
            onClick={() => onPlayerSelect(player)}
            className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
              player.highlighted 
                ? 'bg-blue-50 border border-blue-200' 
                : 'hover:bg-gray-50'
            }`}
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-lg">{player.avatar}</span>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-gray-900">
                  {player.name} ({player.age})
                </h3>
                {player.status === 'active' && (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </div>
              <p className="text-sm text-gray-600">{player.club}</p>
            </div>
            
            <div className="text-right">
              <span className="text-sm font-medium text-gray-900">
                {player.position}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Competition Section */}
      <div className="mt-6 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded border flex items-center justify-center">
            <span className="text-xs font-bold">3B</span>
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">Competition</h4>
            <p className="text-sm text-gray-600">Liga Portugal</p>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-600">Full career</span>
            <p className="text-sm font-medium text-gray-900">Goalkeeper</p>
          </div>
        </div>
        
        <div className="mt-3 flex space-x-2">
          <button className="text-sm text-gray-600 hover:text-gray-900">
            📌 Add
          </button>
          <button className="text-sm text-gray-600 hover:text-gray-900">
            ↗️ Share
          </button>
          <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-full hover:bg-green-700">
            Full profile
          </button>
        </div>
      </div>
    </div>
  );
};