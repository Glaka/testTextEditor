export interface IRelatedWords {
  show: boolean;
  words: string[];
  range?: any;
}

export interface ItoolBarState {
  [key: string]: boolean;
}

export interface IWord {
  word: string;
  score?: number;
  tags?: string[];
}
