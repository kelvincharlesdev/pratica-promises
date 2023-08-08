import { Branch } from './branch';

export interface Repositorio {
  id: number;
  projeto: string;
  branches: Branch[];
}

export interface RepositorioApi {
  id: number;
  name_with_namespace: string;
  branches: Branch[];
}
