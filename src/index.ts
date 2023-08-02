import { Repositorio } from 'types/repositorio';
import { config } from 'dotenv';
config();

export const buscaRepositorios = async (): Promise<Repositorio[]> => {
  console.log(process.env.GITLAB_TOKEN);
  return null;
};

buscaRepositorios().then(console.log);
