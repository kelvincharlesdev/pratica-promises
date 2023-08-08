import { RepositorioApi } from '../../types/repositorio';
import { getBranches } from './get-branches';
import { BranchApi } from '../../types/branch';

export async function getRepositorios(projects: RepositorioApi[]) {
  const repositorios = projects.map((repositorioData: RepositorioApi) => ({
    id: repositorioData.id,
    projeto: repositorioData.name_with_namespace,
    branches: [],
  }));

  for (const repositorio of repositorios) {
    const branches = await getBranches(repositorio.id);
    repositorio.branches = branches.map((branchData: BranchApi) => ({
      nome: branchData.name,
      commits: [],
    }));
  }

  return repositorios;
}
