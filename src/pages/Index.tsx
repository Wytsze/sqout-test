
import React, { useState } from 'react';
import { ClubSelector } from '@/components/ClubSelector';
import { FootballPitch } from '@/components/FootballPitch';
import { PlayerModal } from '@/components/PlayerModal';
import { clubsData } from '@/data/clubsData';
import { Player } from '@/types/club';

const Index = () => {
  const [selectedClub, setSelectedClub] = useState<string>('');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayerSelect = (player: Player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlayer(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold font-poppins text-center mb-8">
          Squad Sight Tactics
        </h1>
        
        <ClubSelector 
          selectedClub={selectedClub}
          onClubSelect={setSelectedClub}
          clubs={Object.keys(clubsData)}
        />
        
        {selectedClub && (
          <FootballPitch 
            club={clubsData[selectedClub]}
            onPlayerSelect={handlePlayerSelect}
          />
        )}
        
        {selectedPlayer && (
          <PlayerModal 
            player={selectedPlayer}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
