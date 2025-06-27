import React from 'react';

export const ContextSidebar: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full p-3 bg-green-50 border border-green-200 rounded-lg text-left hover:bg-green-100 transition-colors">
            <div className="font-medium text-green-800">Create Report</div>
            <div className="text-sm text-green-600">Generate player analysis</div>
          </button>
          <button className="w-full p-3 bg-blue-50 border border-blue-200 rounded-lg text-left hover:bg-blue-100 transition-colors">
            <div className="font-medium text-blue-800">Add to List</div>
            <div className="text-sm text-blue-600">Save to watchlist</div>
          </button>
          <button className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg text-left hover:bg-purple-100 transition-colors">
            <div className="font-medium text-purple-800">Compare</div>
            <div className="text-sm text-purple-600">Compare with others</div>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-900">Player Added</div>
            <div className="text-xs text-gray-600">Nico Williams to Watchlist</div>
            <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-900">Report Generated</div>
            <div className="text-xs text-gray-600">Tactical analysis for Dortmund</div>
            <div className="text-xs text-gray-500 mt-1">5 hours ago</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-900">Match Scouted</div>
            <div className="text-xs text-gray-600">Barcelona vs Real Madrid</div>
            <div className="text-xs text-gray-500 mt-1">1 day ago</div>
          </div>
        </div>
      </div>

      {/* Trending Players */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Players</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Jude Bellingham</div>
              <div className="text-xs text-gray-600">Real Madrid</div>
            </div>
            <div className="text-xs text-green-600">↗️ +15%</div>
          </div>
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Erling Haaland</div>
              <div className="text-xs text-gray-600">Manchester City</div>
            </div>
            <div className="text-xs text-green-600">↗️ +12%</div>
          </div>
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Kylian Mbappé</div>
              <div className="text-xs text-gray-600">PSG</div>
            </div>
            <div className="text-xs text-green-600">↗️ +8%</div>
          </div>
        </div>
      </div>

      {/* Market Insights */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Insights</h3>
        <div className="space-y-3">
          <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <div className="text-sm font-medium text-gray-900">Transfer Window</div>
            <div className="text-xs text-gray-600">23 days remaining</div>
            <div className="text-xs text-green-600 mt-1">High activity period</div>
          </div>
          <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="text-sm font-medium text-gray-900">Market Trend</div>
            <div className="text-xs text-gray-600">Goalkeeper values rising</div>
            <div className="text-xs text-yellow-600 mt-1">+12% this month</div>
          </div>
        </div>
      </div>
    </div>
  );
};