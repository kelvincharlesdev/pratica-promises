import axios from 'axios';
import { config } from 'dotenv';
config();

const token = process.env.GITLAB_TOKEN;
const apiBase = 'https://git.raroacademy.com.br/api/v4/';

export const axiosConfig = axios.create({
  baseURL: apiBase,
  headers: { Authorization: 'Bearer ' + token },
});
