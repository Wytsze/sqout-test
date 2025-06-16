
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
    const formattedName = `${firstName.charAt(0)}. ${lastName}`;
    
    // Clamp long names to prevent overflow
    if (formattedName.length > 12) {
      return formattedName.substring(0, 11) + '…';
    }
    return formattedName;
  };

  return (
    <div className="flex flex-col items-center min-w-32 max-w-36">
      {/* Position tag with enhanced styling */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white px-3 py-1.5 rounded-full text-xs font-bold mb-3 shadow-lg border border-red-500/30">
        {position}
      </div>
      
      {/* Player card with enhanced design and overflow protection */}
      <div className="flex flex-col items-center space-y-1 min-h-24 w-full">
        {topPlayer ? (
          <div
            className="text-center cursor-pointer hover:bg-gray-700/60 hover:shadow-xl p-3 rounded-xl transition-all duration-200 backdrop-blur-sm border border-gray-700/50 bg-gradient-to-b from-gray-800/50 to-gray-800/80 w-full shadow-lg hover:shadow-gray-900/40 hover:scale-105"
            onClick={() => onPlayerSelect(topPlayer)}
            title={`${topPlayer.name} (${topPlayer.age}) - ${topPlayer.contractUntil}`}
          >
            {/* Player name and age with depth indicator */}
            <div className="text-xs font-semibold text-white mb-1 leading-tight">
              <div className="truncate">
                {formatPlayerName(topPlayer.name)} ({topPlayer.age})
                {additionalPlayersCount > 0 && (
                  <span className="text-green-400 font-bold text-xs ml-1 bg-green-400/20 px-1.5 py-0.5 rounded-full">
                    +{additionalPlayersCount}
                  </span>
                )}
              </div>
            </div>
            
            {/* Contract date */}
            <div className="text-xs text-gray-300 italic leading-tight">
              <div className="truncate">
                {topPlayer.contractUntil}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-3 rounded-xl border border-gray-700/50 bg-gradient-to-b from-gray-800/30 to-gray-800/50 w-full shadow-lg">
            <div className="text-xs text-gray-500 italic">
              No Player
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
