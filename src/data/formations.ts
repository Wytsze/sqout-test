
import { Formation } from '@/types/club';

export const formations: Record<string, Formation> = {
  "4-3-3": {
    "GK": { x: 50, y: 90, label: "GK" },
    "LB": { x: 15, y: 75, label: "LB" },
    "CB1": { x: 35, y: 75, label: "CB" },
    "CB2": { x: 65, y: 75, label: "CB" },
    "RB": { x: 85, y: 75, label: "RB" },
    "DM": { x: 50, y: 60, label: "DM" },
    "CM1": { x: 30, y: 45, label: "CM" },
    "CM2": { x: 70, y: 45, label: "CM" },
    "LW": { x: 15, y: 25, label: "LW" },
    "ST": { x: 50, y: 15, label: "ST" },
    "RW": { x: 85, y: 25, label: "RW" }
  },
  "4-2-3-1": {
    "GK": { x: 50, y: 90, label: "GK" },
    "LB": { x: 15, y: 75, label: "LB" },
    "CB1": { x: 35, y: 75, label: "CB" },
    "CB2": { x: 65, y: 75, label: "CB" },
    "RB": { x: 85, y: 75, label: "RB" },
    "DM1": { x: 35, y: 55, label: "DM" },
    "DM2": { x: 65, y: 55, label: "DM" },
    "LW": { x: 15, y: 35, label: "LW" },
    "CAM": { x: 50, y: 35, label: "CAM" },
    "RW": { x: 85, y: 35, label: "RW" },
    "ST": { x: 50, y: 15, label: "ST" }
  }
};
