
export interface Player {
  id: string;
  name: string;
  age: number;
  contractUntil: string;
  position: string;
  height?: number;
  foot?: 'Left' | 'Right' | 'Both';
  marketValue?: number;
  matchParticipation: Record<string, number>;
  transferHistory?: TransferRecord[];
}

export interface TransferRecord {
  date: string;
  fromClub: string;
  toClub: string;
  fee: number;
  age: number;
  previousLeague: string;
}

export interface Club {
  name: string;
  formation: string;
  players: Record<string, Player>;
}

export interface Formation {
  [key: string]: {
    x: number;
    y: number;
    label: string;
  };
}

export interface TransferSuggestion {
  name: string;
  age: number;
  currentClub: string;
  estimatedFee: string;
  previousClub: string;
  transferDate: string;
  similarityReason: string;
}
