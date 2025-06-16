
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ClubSelector } from '@/components/ClubSelector';
import { FootballPitch } from '@/components/FootballPitch';
import { PlayerModal } from '@/components/PlayerModal';
import { clubsData } from '@/data/clubsData';
import { Player, Club } from '@/types/club';

interface TeamsProps {
  onBack: () => void;
}

const Teams: React.FC<TeamsProps> = ({ onBack }) => {
  const [selectedClub, setSelectedClub] = useState<string>('');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedClubData, setSelectedClubData] = useState<Club | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayerSelect = (player: Player, club: Club) => {
    setSelectedPlayer(player);
    setSelectedClubData(club);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlayer(null);
    setSelectedClubData(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-gray-300 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-xl font-poppins font-semibold">Team Analysis</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
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
        
        {selectedPlayer && selectedClubData && (
          <PlayerModal 
            player={selectedPlayer}
            club={selectedClubData}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default Teams;
