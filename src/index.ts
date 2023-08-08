import { Repositorio } from 'types/repositorio';
import { config } from 'dotenv';
import { getProjects } from './services/get-projects';
import { getRepositorios } from './services/get-repositorios';
import { mapCommits } from './services/map-commits';
config();

export const buscaRepositorios = async (): Promise<Repositorio[]> => {
  try {
    const projects = await getProjects();
    const repositorios = await getRepositorios(projects.data);
    await mapCommits(repositorios);

    return repositorios;
  } catch (error) {
    error;
  }
};

buscaRepositorios().then(response =>
  console.log(JSON.stringify(response, null, 2)),
);
