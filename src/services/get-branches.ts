import { axiosConfig } from './axios-config';
import { BranchApi } from '../../types/branch';

export async function getBranches(id: number): Promise<BranchApi[]> {
  const branchesResults = await axiosConfig.get(
    `projects/${id}/repository/branches`,
    {
      params: {
        page: 1,
        per_page: 50,
      },
    },
  );
  return branchesResults.data;
}
