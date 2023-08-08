import { axiosConfig } from './axios-config';

export async function getProjects() {
  return await axiosConfig('projects');
}
