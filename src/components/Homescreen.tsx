
import React from 'react';
import { Users, Shield, UserCheck, Search, BarChart3, LogOut } from 'lucide-react';
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
      description: 'Browse and analyze player profiles',
      icon: Users,
      color: 'bg-blue-600 hover:bg-blue-700',
      comingSoon: false
    },
    {
      id: 'teams',
      title: 'Teams',
      description: 'Interactive squad formations and tactics',
      icon: Shield,
      color: 'bg-green-600 hover:bg-green-700',
      comingSoon: false
    },
    {
      id: 'staff',
      title: 'Staff',
      description: 'Coaching staff and technical team',
      icon: UserCheck,
      color: 'bg-purple-600 hover:bg-purple-700',
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-poppins font-bold">Squad Sight Tactics</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-700 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Name or shirt no. and team"
                  className="bg-transparent border-none outline-none text-sm text-gray-300 placeholder-gray-500 w-64"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onLogout}
                className="text-gray-300 hover:text-white"
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
          <h2 className="text-xl font-poppins font-semibold mb-2">Explore</h2>
          <p className="text-gray-400">Choose a category to begin your scouting analysis</p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button 
            variant="default" 
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6"
          >
            Players
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-800 rounded-full px-6"
            onClick={() => onNavigate('teams')}
          >
            Teams
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-800 rounded-full px-6"
          >
            Staff
          </Button>
        </div>

        {/* Main Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Card 
                key={section.id}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-all duration-200 hover:shadow-lg hover:shadow-gray-900/20 cursor-pointer"
                onClick={() => !section.comingSoon && onNavigate(section.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${section.color} ${section.comingSoon ? 'opacity-50' : ''}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    {section.comingSoon && (
                      <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-poppins font-semibold mb-2 text-white">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {section.description}
                  </p>
                  {!section.comingSoon && (
                    <div className="mt-4">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-green-400 hover:text-green-300 p-0"
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

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Players Analyzed</p>
                <p className="text-xl font-semibold text-white">2,847</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Teams Tracked</p>
                <p className="text-xl font-semibold text-white">127</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Transfer Matches</p>
                <p className="text-xl font-semibold text-white">1,203</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
