
import React from 'react';
import { Player } from '@/types/club';

interface PositionStackProps {
  position: string;
  players: Player[];
  onPlayerSelect: (player: Player) => void;
}

export const PositionStack: React.FC<PositionStackProps> = ({
  position,
  players,
  onPlayerSelect
}) => {
  return (
    <div className="flex flex-col items-center min-w-32">
      {/* Position tag */}
      <div className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold mb-2">
        {position}
      </div>
      
      {/* Players stack */}
      <div className="flex flex-col items-center space-y-1 min-h-16">
        {players.length > 0 ? (
          players.map((player, index) => (
            <div
              key={player.id}
              className="text-center cursor-pointer hover:bg-gray-700 hover:bg-opacity-50 p-1 rounded transition-colors"
              onClick={() => onPlayerSelect(player)}
            >
              <div className="text-xs font-medium text-white">
                {player.name.split(' ').map(name => name.charAt(0)).join('. ')} ({player.age})
              </div>
              <div className="text-xs text-gray-300 italic">
                {player.contractUntil}
              </div>
            </div>
          ))
        ) : (
          <div className="text-xs text-gray-400 italic">
            Unavailable
          </div>
        )}
      </div>
    </div>
  );
};
