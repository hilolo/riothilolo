export class Matchlist {

    matches?: (MatchesEntity)[] | null;
    endIndex: number;
    startIndex: number;
    totalGames: number;

  


}



  export class MatchesEntity {
    lane: string;
    gameId: number;
    champion: number;
    platformId: string;
    timestamp: number;
    queue: number;
    role: string;
    season: number;
  }
  

  

  