
import { Club } from '@/types/club';

export const clubsData: Record<string, Club> = {
  feyenoord: {
    name: "Feyenoord",
    formation: "4-3-3",
    players: {
      "gimenez01": {
        id: "gimenez01",
        name: "Santiago Giménez",
        age: 23,
        contractUntil: "2027-06-30",
        position: "ST",
        height: 185,
        foot: "Right",
        marketValue: 25000000,
        matchParticipation: {
          "ST": 40,
          "LW": 5,
          "RW": 2
        },
        transferHistory: [{
          date: "2022-08-31",
          fromClub: "Cruz Azul",
          toClub: "Feyenoord",
          fee: 6000000,
          age: 21,
          previousLeague: "Liga MX"
        }]
      },
      "kokcu01": {
        id: "kokcu01",
        name: "Orkun Kökçü",
        age: 22,
        contractUntil: "2025-06-30",
        position: "CM",
        height: 178,
        foot: "Right",
        marketValue: 15000000,
        matchParticipation: {
          "CM": 35,
          "CAM": 8,
          "DM": 5
        }
      },
      "timber01": {
        id: "timber01",
        name: "Quilindschy Hartman",
        age: 21,
        contractUntil: "2026-06-30",
        position: "LB",
        height: 182,
        foot: "Left",
        marketValue: 8000000,
        matchParticipation: {
          "LB": 38,
          "LWB": 7
        }
      },
      "geertruida01": {
        id: "geertruida01",
        name: "Lutsharel Geertruida",
        age: 23,
        contractUntil: "2025-06-30",
        position: "RB",
        height: 178,
        foot: "Right",
        marketValue: 12000000,
        matchParticipation: {
          "RB": 35,
          "CB": 8,
          "RWB": 5
        }
      },
      "hancko01": {
        id: "hancko01",
        name: "Dávid Hancko",
        age: 26,
        contractUntil: "2028-06-30",
        position: "CB",
        height: 188,
        foot: "Left",
        marketValue: 18000000,
        matchParticipation: {
          "CB": 42,
          "LB": 3
        }
      },
      "trauner01": {
        id: "trauner01",
        name: "Gernot Trauner",
        age: 31,
        contractUntil: "2025-06-30",
        position: "CB",
        height: 186,
        foot: "Right",
        marketValue: 5000000,
        matchParticipation: {
          "CB": 38,
          "DM": 2
        }
      },
      "szymanski01": {
        id: "szymanski01",
        name: "Sebastian Szymański",
        age: 24,
        contractUntil: "2027-06-30",
        position: "CAM",
        height: 175,
        foot: "Left",
        marketValue: 20000000,
        matchParticipation: {
          "CAM": 30,
          "CM": 12,
          "LW": 8
        }
      },
      "paixao01": {
        id: "paixao01",
        name: "Igor Paixão",
        age: 23,
        contractUntil: "2026-06-30",
        position: "RW",
        height: 177,
        foot: "Right",
        marketValue: 12000000,
        matchParticipation: {
          "RW": 32,
          "LW": 8,
          "CAM": 5
        }
      },
      "stengs01": {
        id: "stengs01",
        name: "Calvin Stengs",
        age: 24,
        contractUntil: "2025-06-30",
        position: "LW",
        height: 176,
        foot: "Left",
        marketValue: 10000000,
        matchParticipation: {
          "LW": 28,
          "RW": 12,
          "CAM": 8
        }
      },
      "bijlow01": {
        id: "bijlow01",
        name: "Justin Bijlow",
        age: 25,
        contractUntil: "2025-06-30",
        position: "GK",
        height: 187,
        foot: "Right",
        marketValue: 8000000,
        matchParticipation: {
          "GK": 45
        }
      },
      "wieffer01": {
        id: "wieffer01",
        name: "Mats Wieffer",
        age: 24,
        contractUntil: "2027-06-30",
        position: "DM",
        height: 185,
        foot: "Right",
        marketValue: 15000000,
        matchParticipation: {
          "DM": 40,
          "CM": 8
        }
      }
    }
  },
  ajax: {
    name: "Ajax",
    formation: "4-2-3-1",
    players: {
      "brobbey01": {
        id: "brobbey01",
        name: "Brian Brobbey",
        age: 22,
        contractUntil: "2027-06-30",
        position: "ST",
        height: 185,
        foot: "Right",
        marketValue: 18000000,
        matchParticipation: {
          "ST": 35,
          "CF": 8
        }
      },
      "taylor01": {
        id: "taylor01",
        name: "Kenneth Taylor",
        age: 21,
        contractUntil: "2025-06-30",
        position: "CM",
        height: 180,
        foot: "Left",
        marketValue: 12000000,
        matchParticipation: {
          "CM": 30,
          "CAM": 12,
          "LW": 5
        }
      }
    }
  }
};
