
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
