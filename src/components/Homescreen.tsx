
import React from 'react';
import { Users, Shield, UserCheck, Search, BarChart3, LogOut, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface HomescreenProps {
  onNavigate: (section: string) => void;
  onLogout: () => void;
}

export const Homescreen: React.FC<HomescreenProps> = ({ onNavigate, onLogout }) => {
  const sections = [
    {
      id: 'players',
      title: 'Players',
      description: 'Browse and analyze individual player profiles, statistics, and performance data',
      icon: Users,
      color: 'bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
      comingSoon: true
    },
    {
      id: 'teams',
      title: 'Teams',
      description: 'Interactive squad formations, tactical analysis, and team depth visualization',
      icon: Shield,
      color: 'bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800',
      comingSoon: false
    },
    {
      id: 'staff',
      title: 'Staff',
      description: 'Coaching staff profiles, technical team analysis, and management structure',
      icon: UserCheck,
      color: 'bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800',
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-poppins font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Squad Sight Tactics
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-700/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-600">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search players, teams..."
                  className="bg-transparent border-none outline-none text-sm text-gray-300 placeholder-gray-500 w-64"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onLogout}
                className="text-gray-300 hover:text-white hover:bg-gray-700/50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-poppins font-semibold mb-2">Scouting Dashboard</h2>
          <p className="text-gray-400">Advanced football intelligence and analysis platform</p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button 
            variant="default" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-6 shadow-lg"
            onClick={() => onNavigate('players')}
          >
            Players
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 rounded-full px-6"
            onClick={() => onNavigate('teams')}
          >
            Teams
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 rounded-full px-6"
            onClick={() => onNavigate('staff')}
          >
            Staff
          </Button>
        </div>

        {/* Main Navigation Grid - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card 
                key={section.id}
                className={`bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/30 cursor-pointer backdrop-blur-sm ${
                  section.comingSoon ? 'opacity-75' : 'hover:scale-105'
                } ${index === 1 ? 'lg:scale-105' : ''}`} // Highlight middle card
                onClick={() => !section.comingSoon && onNavigate(section.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-xl ${section.color} ${section.comingSoon ? 'opacity-50' : ''} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    {section.comingSoon && (
                      <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-poppins font-semibold mb-3 text-white">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {section.description}
                  </p>
                  {!section.comingSoon && (
                    <div className="mt-4">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-green-400 hover:text-green-300 p-0 hover:bg-transparent"
                      >
                        Explore →
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Quick Stats - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-gray-800/60 to-gray-800/40 border-gray-700 shadow-lg backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Players Analyzed</p>
                  <p className="text-2xl font-bold text-white">2,847</p>
                  <p className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12% this month
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-gray-800/60 to-gray-800/40 border-gray-700 shadow-lg backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Teams Tracked</p>
                  <p className="text-2xl font-bold text-white">127</p>
                  <p className="text-xs text-blue-400">Across 5 leagues</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-gray-800/60 to-gray-800/40 border-gray-700 shadow-lg backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Transfer Insights</p>
                  <p className="text-2xl font-bold text-white">1,203</p>
                  <p className="text-xs text-purple-400">Market predictions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
