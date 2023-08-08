import { Repositorio } from '../../types/repositorio';
import { getCommits } from './get-commit';
import { CommitApi } from '../../types/commit';

export async function mapCommits(repositorios: Repositorio[]) {
  for (const repositorio of repositorios) {
    for (const branche of repositorio.branches) {
      const commits = await getCommits(repositorio.id, branche.nome);
      const mapCommits = commits.map((commitsData: CommitApi) => ({
        id: commitsData.id,
        mensagem: commitsData.message,
        autor: commitsData.author_name,
        data: commitsData.authored_date,
      }));
      branche.commits = mapCommits;
    }
  }
}
