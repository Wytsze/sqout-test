
import React from 'react';
import { Club, Player } from '@/types/club';
import { formations } from '@/data/formations';
import { PositionStack } from '@/components/PositionStack';

interface FootballPitchProps {
  club: Club;
  onPlayerSelect: (player: Player) => void;
}

export const FootballPitch: React.FC<FootballPitchProps> = ({ club, onPlayerSelect }) => {
  const formation = formations[club.formation];
  
  if (!formation) {
    return <div className="text-center text-red-500">Formation not supported</div>;
  }

  // Group players by their most played position
  const playersByPosition = Object.values(club.players).reduce((acc, player) => {
    const mostPlayedPosition = Object.entries(player.matchParticipation)
      .sort(([,a], [,b]) => b - a)[0]?.[0];
    
    if (mostPlayedPosition) {
      if (!acc[mostPlayedPosition]) {
        acc[mostPlayedPosition] = [];
      }
      acc[mostPlayedPosition].push(player);
    }
    
    return acc;
  }, {} as Record<string, Player[]>);

  // Sort players within each position by minutes played
  Object.keys(playersByPosition).forEach(position => {
    playersByPosition[position].sort((a, b) => 
      (b.matchParticipation[position] || 0) - (a.matchParticipation[position] || 0)
    );
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold font-poppins text-center mb-4">
        {club.name} ({club.formation})
      </h2>
      
      <div className="relative bg-green-800 rounded-lg p-4" style={{ aspectRatio: '2/3' }}>
        {/* Pitch SVG */}
        <svg 
          viewBox="0 0 100 150" 
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
        >
          {/* Pitch outline */}
          <rect x="2" y="2" width="96" height="146" fill="none" stroke="white" strokeWidth="0.5"/>
          
          {/* Center line */}
          <line x1="2" y1="75" x2="98" y2="75" stroke="white" strokeWidth="0.3"/>
          
          {/* Center circle */}
          <circle cx="50" cy="75" r="10" fill="none" stroke="white" strokeWidth="0.3"/>
          
          {/* Penalty areas */}
          <rect x="20" y="2" width="60" height="18" fill="none" stroke="white" strokeWidth="0.3"/>
          <rect x="20" y="130" width="60" height="18" fill="none" stroke="white" strokeWidth="0.3"/>
          
          {/* 6-yard boxes */}
          <rect x="35" y="2" width="30" height="8" fill="none" stroke="white" strokeWidth="0.3"/>
          <rect x="35" y="140" width="30" height="8" fill="none" stroke="white" strokeWidth="0.3"/>
          
          {/* Penalty spots */}
          <circle cx="50" cy="12" r="0.5" fill="white"/>
          <circle cx="50" cy="138" r="0.5" fill="white"/>
        </svg>
        
        {/* Position stacks */}
        <div className="relative w-full h-full" style={{ zIndex: 2 }}>
          {Object.entries(formation).map(([positionKey, position]) => {
            const positionLabel = position.label;
            const playersInPosition = playersByPosition[positionLabel] || [];
            
            return (
              <div
                key={positionKey}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`
                }}
              >
                <PositionStack
                  position={positionLabel}
                  players={playersInPosition}
                  onPlayerSelect={onPlayerSelect}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
