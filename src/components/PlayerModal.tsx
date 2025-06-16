
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Player, Club } from '@/types/club';
import { TransferSuggestionService } from '@/services/TransferSuggestionService';

interface PlayerModalProps {
  player: Player;
  club: Club;
  isOpen: boolean;
  onClose: () => void;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({ player, club, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('stats');

  const mostPlayedPosition = Object.entries(player.matchParticipation)
    .sort(([,a], [,b]) => b - a)[0];

  const positionUsagePercentage = mostPlayedPosition 
    ? Math.round((mostPlayedPosition[1] / Object.values(player.matchParticipation).reduce((a, b) => a + b, 0)) * 100)
    : 0;

  // Get other players who can play the same position
  const otherPlayersInPosition = Object.values(club.players)
    .filter(p => p.id !== player.id && mostPlayedPosition && p.matchParticipation[mostPlayedPosition[0]])
    .sort((a, b) => (b.matchParticipation[mostPlayedPosition[0]] || 0) - (a.matchParticipation[mostPlayedPosition[0]] || 0));

  const formatPlayerName = (name: string) => {
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');
    return `${firstName.charAt(0)}. ${lastName}`;
  };

  const suggestions = TransferSuggestionService.generateSuggestions(player);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white border-gray-700 max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-poppins text-xl">
            {player.name}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 bg-gray-700">
            <TabsTrigger value="stats" className="text-white data-[state=active]:bg-gray-600">
              Key Stats
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="text-white data-[state=active]:bg-gray-600">
              Transfers
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="stats" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-400">Age</div>
                <div className="text-lg font-semibold">{player.age}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Height</div>
                <div className="text-lg font-semibold">{player.height || 'N/A'} cm</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Preferred Foot</div>
                <div className="text-lg font-semibold">{player.foot || 'N/A'}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Position Usage</div>
                <div className="text-lg font-semibold">{positionUsagePercentage}%</div>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-2">Contract Until</div>
              <div className="text-lg font-semibold">{player.contractUntil}</div>
            </div>
            
            {player.marketValue && (
              <div>
                <div className="text-sm text-gray-400 mb-2">Market Value</div>
                <div className="text-lg font-semibold">
                  €{(player.marketValue / 1000000).toFixed(1)}M
                </div>
              </div>
            )}
            
            <div>
              <div className="text-sm text-gray-400 mb-2">Match Participation</div>
              <div className="space-y-1">
                {Object.entries(player.matchParticipation)
                  .sort(([,a], [,b]) => b - a)
                  .map(([position, minutes]) => (
                    <div key={position} className="flex justify-between text-sm">
                      <span>{position}</span>
                      <span>{minutes} min</span>
                    </div>
                  ))}
              </div>
            </div>

            {mostPlayedPosition && otherPlayersInPosition.length > 0 && (
              <div>
                <div className="text-sm text-gray-400 mb-2">
                  Other players in {mostPlayedPosition[0]}
                </div>
                <div className="space-y-2">
                  {otherPlayersInPosition.map((otherPlayer) => (
                    <div key={otherPlayer.id} className="bg-gray-700 p-2 rounded">
                      <div className="text-sm font-medium">
                        {formatPlayerName(otherPlayer.name)} ({otherPlayer.age})
                      </div>
                      <div className="text-xs text-gray-300 italic">
                        {otherPlayer.contractUntil}
                      </div>
                      <div className="text-xs text-gray-400">
                        {otherPlayer.matchParticipation[mostPlayedPosition[0]]} min
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="suggestions" className="space-y-4">
            <div className="text-sm text-gray-400 mb-4">
              Transfer suggestions based on historical context and similar deals
            </div>
            
            <div className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="bg-gray-700 p-3 rounded-lg">
                  <div className="font-semibold">{suggestion.name}</div>
                  <div className="text-sm text-gray-300">
                    Age: {suggestion.age} • Current: {suggestion.currentClub}
                  </div>
                  <div className="text-sm text-gray-300">
                    Fee: {suggestion.estimatedFee}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {suggestion.similarityReason}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
