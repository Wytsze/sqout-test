
import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Calendar, Users, Award } from 'lucide-react';

interface ContextPanelProps {
  selectedTeam?: string;
}

export const ContextPanel: React.FC<ContextPanelProps> = ({ selectedTeam }) => {
  return (
    <div className="p-4 space-y-6">
      <div>
        <h2 className="text-lg font-poppins font-semibold text-white mb-4">Context</h2>
        
        {/* Quick Stats */}
        <div className="space-y-3">
          <Card className="bg-gray-800/40 border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Market Trends</p>
                <p className="text-lg font-semibold text-white">+12% This Month</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-800/40 border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Calendar className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Transfer Window</p>
                <p className="text-lg font-semibold text-white">23 Days Left</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-800/40 border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Scouted Players</p>
                <p className="text-lg font-semibold text-white">147</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Weekly Challenge */}
      <div>
        <h3 className="text-md font-poppins font-medium text-white mb-3">Weekly Challenge</h3>
        <Card className="bg-gradient-to-br from-green-600/20 to-blue-600/20 border-green-500/30 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Award className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium text-green-400">Scout Challenge</span>
          </div>
          <p className="text-sm text-gray-300 mb-3">
            Find 3 undervalued players under 23 with high potential in top 5 leagues
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">Progress: 1/3</span>
            <div className="w-16 bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-1/3"></div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-md font-poppins font-medium text-white mb-3">Recent Activity</h3>
        <div className="space-y-2">
          <div className="text-sm text-gray-400 p-3 bg-gray-800/30 rounded-lg">
            <span className="text-green-400">Scout Report:</span> J. Bellingham analysis completed
          </div>
          <div className="text-sm text-gray-400 p-3 bg-gray-800/30 rounded-lg">
            <span className="text-blue-400">Transfer Alert:</span> New signing at Bayern München
          </div>
          <div className="text-sm text-gray-400 p-3 bg-gray-800/30 rounded-lg">
            <span className="text-purple-400">Watchlist:</span> 3 players added this week
          </div>
        </div>
      </div>
    </div>
  );
};
