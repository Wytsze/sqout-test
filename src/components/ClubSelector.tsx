
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ClubSelectorProps {
  selectedClub: string;
  onClubSelect: (club: string) => void;
  clubs: string[];
}

export const ClubSelector: React.FC<ClubSelectorProps> = ({
  selectedClub,
  onClubSelect,
  clubs
}) => {
  return (
    <div className="mb-8">
      <Select value={selectedClub} onValueChange={onClubSelect}>
        <SelectTrigger className="w-full max-w-md mx-auto bg-gray-800 border-gray-700 text-white">
          <SelectValue placeholder="Select a club" />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 border-gray-700">
          {clubs.map((club) => (
            <SelectItem key={club} value={club} className="text-white hover:bg-gray-700">
              {club.charAt(0).toUpperCase() + club.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
