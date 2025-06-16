
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

  const totalMinutes = Object.values(player.matchParticipation).reduce((a, b) => a + b, 0);
  
  // Calculate percentage of appearances in primary position
  const primaryPositionPercentage = mostPlayedPosition 
    ? Math.round((mostPlayedPosition[1] / totalMinutes) * 100)
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
      <DialogContent className="bg-gray-800/95 backdrop-blur-sm text-white border-gray-700 max-w-md max-h-[80vh] overflow-y-auto shadow-2xl">
        <DialogHeader>
          <DialogTitle className="font-poppins text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {player.name}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 bg-gray-700/50 backdrop-blur-sm">
            <TabsTrigger value="stats" className="text-white data-[state=active]:bg-gray-600/80">
              Key Stats
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="text-white data-[state=active]:bg-gray-600/80">
              Transfers
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="stats" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-700/40 to-gray-700/20 p-3 rounded-lg border border-gray-600/30">
                <div className="text-sm text-gray-400">Age</div>
                <div className="text-lg font-semibold">{player.age}</div>
              </div>
              <div className="bg-gradient-to-br from-gray-700/40 to-gray-700/20 p-3 rounded-lg border border-gray-600/30">
                <div className="text-sm text-gray-400">Height</div>
                <div className="text-lg font-semibold">{player.height || 'N/A'} cm</div>
              </div>
              <div className="bg-gradient-to-br from-gray-700/40 to-gray-700/20 p-3 rounded-lg border border-gray-600/30">
                <div className="text-sm text-gray-400">Preferred Foot</div>
                <div className="text-lg font-semibold">{player.foot || 'N/A'}</div>
              </div>
              <div className="bg-gradient-to-br from-gray-700/40 to-gray-700/20 p-3 rounded-lg border border-gray-600/30">
                <div className="text-sm text-gray-400">Primary Position</div>
                <div className="text-lg font-semibold text-green-400">{primaryPositionPercentage}%</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700/40 to-gray-700/20 p-3 rounded-lg border border-gray-600/30">
              <div className="text-sm text-gray-400 mb-2">Contract Until</div>
              <div className="text-lg font-semibold">{player.contractUntil}</div>
            </div>
            
            {player.marketValue && (
              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 p-3 rounded-lg border border-green-500/30">
                <div className="text-sm text-gray-400 mb-2">Market Value</div>
                <div className="text-lg font-semibold text-green-400">
                  €{(player.marketValue / 1000000).toFixed(1)}M
                </div>
              </div>
            )}
            
            <div className="bg-gradient-to-br from-gray-700/40 to-gray-700/20 p-3 rounded-lg border border-gray-600/30">
              <div className="text-sm text-gray-400 mb-3">Position Usage (% of Appearances)</div>
              <div className="space-y-2">
                {Object.entries(player.matchParticipation)
                  .sort(([,a], [,b]) => b - a)
                  .map(([position, minutes]) => {
                    const percentage = Math.round((minutes / totalMinutes) * 100);
                    return (
                      <div key={position} className="flex justify-between items-center text-sm">
                        <span className="font-medium">{position}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-600 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-gray-300 w-8 text-right font-medium">{percentage}%</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {mostPlayedPosition && otherPlayersInPosition.length > 0 && (
              <div className="bg-gradient-to-br from-gray-700/40 to-gray-700/20 p-3 rounded-lg border border-gray-600/30">
                <div className="text-sm text-gray-400 mb-3">
                  Other players in {mostPlayedPosition[0]} ({otherPlayersInPosition.length})
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {otherPlayersInPosition.map((otherPlayer) => {
                    const otherPlayerTotal = Object.values(otherPlayer.matchParticipation).reduce((a, b) => a + b, 0);
                    const otherPlayerPercentage = Math.round((otherPlayer.matchParticipation[mostPlayedPosition[0]] / otherPlayerTotal) * 100);
                    
                    return (
                      <div key={otherPlayer.id} className="bg-gray-600/50 p-2 rounded border border-gray-600/30">
                        <div className="text-sm font-medium">
                          {formatPlayerName(otherPlayer.name)} ({otherPlayer.age})
                        </div>
                        <div className="text-xs text-gray-300 italic">
                          {otherPlayer.contractUntil}
                        </div>
                        <div className="text-xs text-green-400 font-medium">
                          {otherPlayerPercentage}% usage in position
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="suggestions" className="space-y-4">
            <div className="text-sm text-gray-400 mb-4 bg-gradient-to-br from-gray-700/40 to-gray-700/20 p-3 rounded-lg border border-gray-600/30">
              Transfer suggestions based on historical context and similar deals
            </div>
            
            <div className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-700/50 to-gray-700/30 p-4 rounded-lg border border-gray-600/50 shadow-lg">
                  <div className="font-semibold text-white">{suggestion.name}</div>
                  <div className="text-sm text-gray-300 mt-1">
                    Age: {suggestion.age} • Current: {suggestion.currentClub}
                  </div>
                  <div className="text-sm text-green-400 font-medium mt-1">
                    Fee: {suggestion.estimatedFee}
                  </div>
                  <div className="text-xs text-gray-400 mt-2 bg-gray-800/50 p-2 rounded border border-gray-700/30">
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
