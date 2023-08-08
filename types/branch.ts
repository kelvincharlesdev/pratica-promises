import { Commit } from './commit';

export interface Branch {
  nome: string;
  commits: Commit[];
}

export interface BranchApi {
  name: string;
  commits: Commit[];
}
