export interface Commit {
  id: string;
  mensagem: string;
  autor: string;
  data: string;
}

export interface CommitApi {
  id: string;
  message: string;
  author_name: string;
  authored_date: string;
}
