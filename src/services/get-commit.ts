import { axiosConfig } from './axios-config';
import { CommitApi } from '../../types/commit';

export async function getCommits(
  id: number,
  branch: string,
): Promise<CommitApi[]> {
  const commitResults = await axiosConfig.get(
    `projects/${id}/repository/commits`,
    {
      params: {
        ref_name: branch,
        page: 1,
        per_page: 50,
      },
    },
  );
  return commitResults.data;
}
