
import React, { useState } from 'react';
import { Search, ChevronLeft, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Team {
  id: string;
  name: string;
  shortName: string;
  city: string;
  logo?: string;
}

interface TeamSelectorProps {
  competitionId: string;
  onTeamSelect: (teamId: string) => void;
  onBack: () => void;
  selectedTeam?: string;
}

const mockTeamsByCompetition: Record<string, Team[]> = {
  'premier-league': [
    { id: 'arsenal', name: 'Arsenal FC', shortName: 'ARS', city: 'London' },
    { id: 'chelsea', name: 'Chelsea FC', shortName: 'CHE', city: 'London' },
    { id: 'manchester-city', name: 'Manchester City', shortName: 'MCI', city: 'Manchester' },
    { id: 'manchester-united', name: 'Manchester United', shortName: 'MUN', city: 'Manchester' },
    { id: 'liverpool', name: 'Liverpool FC', shortName: 'LIV', city: 'Liverpool' },
    { id: 'tottenham', name: 'Tottenham Hotspur', shortName: 'TOT', city: 'London' },
  ],
  'la-liga': [
    { id: 'real-madrid', name: 'Real Madrid', shortName: 'RMA', city: 'Madrid' },
    { id: 'barcelona', name: 'FC Barcelona', shortName: 'BAR', city: 'Barcelona' },
    { id: 'atletico-madrid', name: 'Atlético Madrid', shortName: 'ATM', city: 'Madrid' },
    { id: 'sevilla', name: 'Sevilla FC', shortName: 'SEV', city: 'Sevilla' },
  ],
  'eredivisie': [
    { id: 'feyenoord', name: 'Feyenoord Rotterdam', shortName: 'FEY', city: 'Rotterdam' },
    { id: 'ajax', name: 'AFC Ajax', shortName: 'AJX', city: 'Amsterdam' },
    { id: 'psv', name: 'PSV Eindhoven', shortName: 'PSV', city: 'Eindhoven' },
  ]
};

export const TeamSelector: React.FC<TeamSelectorProps> = ({
  competitionId,
  onTeamSelect,
  onBack,
  selectedTeam
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const teams = mockTeamsByCompetition[competitionId] || [];
  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const competitionName = competitionId.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="p-4 space-y-4">
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-gray-300 hover:text-white p-1"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h2 className="text-lg font-poppins font-semibold text-white">{competitionName}</h2>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search teams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Teams List */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-300">Teams ({filteredTeams.length})</h3>
        
        <div className="space-y-1">
          {filteredTeams.map((team) => (
            <Card
              key={team.id}
              className={`p-3 cursor-pointer transition-all duration-200 hover:bg-gray-700/60 border ${
                selectedTeam === team.id
                  ? 'bg-green-600/20 border-green-500/50'
                  : 'bg-gray-800/40 border-gray-700 hover:border-gray-600'
              }`}
              onClick={() => onTeamSelect(team.id)}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-600 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{team.name}</div>
                  <div className="text-xs text-gray-400">{team.city}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
