
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Player } from '@/types/club';

interface PlayerModalProps {
  player: Player;
  isOpen: boolean;
  onClose: () => void;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({ player, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('stats');

  const mostPlayedPosition = Object.entries(player.matchParticipation)
    .sort(([,a], [,b]) => b - a)[0];

  const positionUsagePercentage = mostPlayedPosition 
    ? Math.round((mostPlayedPosition[1] / Object.values(player.matchParticipation).reduce((a, b) => a + b, 0)) * 100)
    : 0;

  const suggestions = [
    { name: "Similar Player 1", age: player.age + 1, value: "$12M" },
    { name: "Similar Player 2", age: player.age - 2, value: "$8M" },
    { name: "Similar Player 3", age: player.age + 3, value: "$15M" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white border-gray-700 max-w-md">
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
              Suggestions
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
          </TabsContent>
          
          <TabsContent value="suggestions" className="space-y-4">
            <div className="text-sm text-gray-400 mb-4">
              AI-generated replacements based on age, playstyle, and market value
            </div>
            
            <div className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="bg-gray-700 p-3 rounded-lg">
                  <div className="font-semibold">{suggestion.name}</div>
                  <div className="text-sm text-gray-300">
                    Age: {suggestion.age} • Value: {suggestion.value}
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
