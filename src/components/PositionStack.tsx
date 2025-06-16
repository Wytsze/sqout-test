
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
  const topPlayer = players[0];
  const additionalPlayersCount = players.length - 1;

  const formatPlayerName = (name: string) => {
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');
    return `${firstName.charAt(0)}. ${lastName}`;
  };

  return (
    <div className="flex flex-col items-center min-w-32">
      {/* Position tag */}
      <div className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold mb-2">
        {position}
      </div>
      
      {/* Top player with depth indicator */}
      <div className="flex flex-col items-center space-y-1 min-h-16">
        {topPlayer ? (
          <div
            className="text-center cursor-pointer hover:bg-gray-700 hover:bg-opacity-50 p-2 rounded transition-colors"
            onClick={() => onPlayerSelect(topPlayer)}
          >
            <div className="text-xs font-medium text-white flex items-center gap-1">
              {formatPlayerName(topPlayer.name)} ({topPlayer.age})
              {additionalPlayersCount > 0 && (
                <span className="text-green-400 font-bold">
                  +{additionalPlayersCount}
                </span>
              )}
            </div>
            <div className="text-xs text-gray-300 italic">
              {topPlayer.contractUntil}
            </div>
          </div>
        ) : (
          <div className="text-xs text-gray-400 italic">
            Unavailable
          </div>
        )}
      </div>
    </div>
  );
};
