
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
      {/* Position tag with improved styling */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-lg">
        {position}
      </div>
      
      {/* Player card with enhanced design */}
      <div className="flex flex-col items-center space-y-1 min-h-20">
        {topPlayer ? (
          <div
            className="text-center cursor-pointer hover:bg-gray-700/60 hover:shadow-lg p-3 rounded-lg transition-all duration-200 backdrop-blur-sm border border-gray-700/50 bg-gray-800/40 min-w-28"
            onClick={() => onPlayerSelect(topPlayer)}
          >
            <div className="text-xs font-medium text-white flex items-center justify-center gap-1 mb-1">
              <span className="truncate max-w-20" title={formatPlayerName(topPlayer.name)}>
                {formatPlayerName(topPlayer.name)} ({topPlayer.age})
              </span>
              {additionalPlayersCount > 0 && (
                <span className="text-green-400 font-bold text-xs ml-1 bg-green-400/20 px-1 rounded">
                  +{additionalPlayersCount}
                </span>
              )}
            </div>
            <div className="text-xs text-gray-300 italic">
              {topPlayer.contractUntil}
            </div>
          </div>
        ) : (
          <div className="text-center p-3 rounded-lg border border-gray-700/50 bg-gray-800/20 min-w-28">
            <div className="text-xs text-gray-500 italic">
              Unavailable
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
