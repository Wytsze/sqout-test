import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { PlayerSearchResults } from '@/components/PlayerSearchResults';
import { PlayerProfile } from '@/components/PlayerProfile';
import { ContextSidebar } from '@/components/ContextSidebar';

interface TeamsProps {
  onBack: () => void;
}

const Teams: React.FC<TeamsProps> = ({ onBack }) => {
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [searchTerm] = useState('nico'); // Default search term

  const handlePlayerSelect = (player: any) => {
    setSelectedPlayer(player);
  };

  return (
    <MainLayout
      leftPanel={
        <PlayerSearchResults 
          searchTerm={searchTerm}
          onPlayerSelect={handlePlayerSelect}
        />
      }
      mainContent={
        <PlayerProfile player={selectedPlayer} />
      }
      rightPanel={
        <ContextSidebar />
      }
      onLogout={onBack}
    />
  );
};

export default Teams;