
export interface PlayerRank { rank: number; name: string; games: number; score: number; }
export interface GroupRank { groupName: string; rankings: PlayerRank[]; }