import { Commit } from './commit';

export interface Branch {
  nome: string;
  commits: Commit[];
}
