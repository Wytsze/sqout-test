
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThreeColumnLayout } from '@/components/layout/ThreeColumnLayout';
import { CompetitionSelector } from '@/components/navigation/CompetitionSelector';
import { TeamSelector } from '@/components/navigation/TeamSelector';
import { ContextPanel } from '@/components/context/ContextPanel';
import { FootballPitch } from '@/components/FootballPitch';
import { PlayerModal } from '@/components/PlayerModal';
import { clubsData } from '@/data/clubsData';
import { Player, Club } from '@/types/club';

interface TeamsProps {
  onBack: () => void;
}

const Teams: React.FC<TeamsProps> = ({ onBack }) => {
  const [selectedCompetition, setSelectedCompetition] = useState<string>('');
  const [selectedTeam, setSelectedTeam] = useState<string>('');
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

  const handleCompetitionSelect = (competitionId: string) => {
    setSelectedCompetition(competitionId);
    setSelectedTeam(''); // Reset team selection
  };

  const handleTeamSelect = (teamId: string) => {
    setSelectedTeam(teamId);
  };

  const handleBackToCompetitions = () => {
    setSelectedCompetition('');
    setSelectedTeam('');
  };

  // Get team data (using existing mock data structure)
  const getTeamData = (teamId: string) => {
    // Map team IDs to our existing club data
    const teamClubMap: Record<string, string> = {
      'feyenoord': 'Feyenoord Rotterdam',
      'ajax': 'AFC Ajax',
      'psv': 'PSV Eindhoven',
      'arsenal': 'Arsenal FC',
      'chelsea': 'Chelsea FC',
      'manchester-city': 'Manchester City',
      'real-madrid': 'Real Madrid',
      'barcelona': 'FC Barcelona'
    };
    
    const clubName = teamClubMap[teamId];
    return clubName ? clubsData[clubName] : null;
  };

  const selectedClub = selectedTeam ? getTeamData(selectedTeam) : null;

  const renderLeftPanel = () => {
    if (!selectedCompetition) {
      return (
        <CompetitionSelector
          onCompetitionSelect={handleCompetitionSelect}
          selectedCompetition={selectedCompetition}
        />
      );
    }

    return (
      <TeamSelector
        competitionId={selectedCompetition}
        onTeamSelect={handleTeamSelect}
        onBack={handleBackToCompetitions}
        selectedTeam={selectedTeam}
      />
    );
  };

  const renderMainContent = () => {
    if (!selectedClub) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <div className="max-w-md">
            <h2 className="text-2xl font-poppins font-semibold text-white mb-4">
              Select a Team
            </h2>
            <p className="text-gray-400 mb-6">
              Choose a competition and team from the left panel to view their interactive pitch and squad analysis.
            </p>
            <Button
              variant="outline"
              onClick={onBack}
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-poppins font-semibold text-white">
                {selectedClub.name}
              </h1>
              <p className="text-gray-400">Formation: {selectedClub.formation}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-gray-300 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>

        {/* Pitch View */}
        <FootballPitch 
          club={selectedClub}
          onPlayerSelect={handlePlayerSelect}
        />
      </div>
    );
  };

  return (
    <>
      <ThreeColumnLayout
        leftPanel={renderLeftPanel()}
        mainContent={renderMainContent()}
        rightPanel={<ContextPanel selectedTeam={selectedTeam} />}
      />
      
      {selectedPlayer && selectedClubData && (
        <PlayerModal 
          player={selectedPlayer}
          club={selectedClubData}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Teams;
