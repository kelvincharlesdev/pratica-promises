import { Branch } from './branch';

export interface Repositorio {
  id: number;
  projeto: string;
  branches: Branch[];
}
