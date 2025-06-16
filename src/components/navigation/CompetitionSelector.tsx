
import React, { useState } from 'react';
import { Search, ChevronRight, Trophy, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Competition {
  id: string;
  name: string;
  country: string;
  tier: number;
  logo?: string;
}

interface CompetitionSelectorProps {
  onCompetitionSelect: (competitionId: string) => void;
  selectedCompetition?: string;
}

const mockCompetitions: Competition[] = [
  { id: 'premier-league', name: 'Premier League', country: 'England', tier: 1 },
  { id: 'la-liga', name: 'La Liga', country: 'Spain', tier: 1 },
  { id: 'bundesliga', name: 'Bundesliga', country: 'Germany', tier: 1 },
  { id: 'serie-a', name: 'Serie A', country: 'Italy', tier: 1 },
  { id: 'ligue-1', name: 'Ligue 1', country: 'France', tier: 1 },
  { id: 'eredivisie', name: 'Eredivisie', country: 'Netherlands', tier: 1 },
];

export const CompetitionSelector: React.FC<CompetitionSelectorProps> = ({
  onCompetitionSelect,
  selectedCompetition
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredCompetitions = mockCompetitions.filter(comp =>
    comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comp.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const topCompetitions = filteredCompetitions.slice(0, showAll ? undefined : 6);

  return (
    <div className="p-4 space-y-4">
      <div className="space-y-3">
        <h2 className="text-lg font-poppins font-semibold text-white">Competitions</h2>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search competitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Top Competitions */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-300">Top Competitions</h3>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs text-green-400 hover:text-green-300"
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
        
        <div className="space-y-1">
          {topCompetitions.map((competition) => (
            <Card
              key={competition.id}
              className={`p-3 cursor-pointer transition-all duration-200 hover:bg-gray-700/60 border ${
                selectedCompetition === competition.id
                  ? 'bg-green-600/20 border-green-500/50'
                  : 'bg-gray-800/40 border-gray-700 hover:border-gray-600'
              }`}
              onClick={() => onCompetitionSelect(competition.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{competition.name}</div>
                    <div className="text-xs text-gray-400 flex items-center">
                      <Globe className="w-3 h-3 mr-1" />
                      {competition.country}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
