
import { Player, TransferSuggestion } from '@/types/club';

export class TransferSuggestionService {
  static generateSuggestions(player: Player): TransferSuggestion[] {
    // Get the most recent transfer record if available
    const latestTransfer = player.transferHistory?.[0];
    
    if (!latestTransfer) {
      // Fallback to generic suggestions based on player profile
      return this.generateGenericSuggestions(player);
    }

    // Generate suggestions based on transfer profile
    return this.generateProfileBasedSuggestions(player, latestTransfer);
  }

  private static generateProfileBasedSuggestions(
    player: Player, 
    transfer: any
  ): TransferSuggestion[] {
    const suggestions: TransferSuggestion[] = [];
    
    // Mock suggestions based on transfer profile
    // In a real app, this would query the scraped transfer database
    
    if (transfer.previousLeague === 'Liga MX') {
      suggestions.push({
        name: 'Henry Martín',
        age: 30,
        currentClub: 'Club América',
        estimatedFee: '€8-12M',
        previousClub: 'Club América',
        transferDate: '2023',
        similarityReason: 'Similar Liga MX background, proven goalscorer'
      });
      
      suggestions.push({
        name: 'Germán Berterame',
        age: 25,
        currentClub: 'Monterrey',
        estimatedFee: '€6-10M',
        previousClub: 'Atlético San Luis',
        transferDate: '2022',
        similarityReason: 'Argentine striker from Liga MX, similar age profile'
      });
    }

    if (transfer.fee && transfer.fee <= 10000000) {
      suggestions.push({
        name: 'Folarin Balogun',
        age: 25,
        currentClub: 'AS Monaco',
        estimatedFee: '€12-18M',
        previousClub: 'Reims',
        transferDate: '2023',
        similarityReason: 'Similar fee range, proven in top European league'
      });
    }

    return suggestions.slice(0, 3);
  }

  private static generateGenericSuggestions(player: Player): TransferSuggestion[] {
    // Fallback suggestions when no transfer history is available
    return [
      {
        name: 'Generic Player 1',
        age: player.age + 1,
        currentClub: 'Example FC',
        estimatedFee: '€10-15M',
        previousClub: 'Previous Club',
        transferDate: '2023',
        similarityReason: 'Similar age and position profile'
      },
      {
        name: 'Generic Player 2',
        age: player.age - 2,
        currentClub: 'Sample United',
        estimatedFee: '€8-12M',
        previousClub: 'Former Team',
        transferDate: '2022',
        similarityReason: 'Promising young talent'
      }
    ];
  }
}
