import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GitHubData, GitHubRepo, GitHubUser } from "../models/usuariosGit";

const fetchData = async (username: string): Promise<GitHubData> => {

  const headers = { 
    Authorization: `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I`
  }

  const [userResponse, reposResponse] = await Promise.all([
    axios.get<GitHubUser>(`https://api.github.com/users/${username}`, {headers}),
    axios.get<GitHubRepo[]>(`https://api.github.com/users/${username}/repos`, {headers}),
  ]);

  return {
    user: userResponse.data,
    repos: reposResponse.data,
  };
};

export function useGitUsuarios(username: string) {
  return useQuery<GitHubData>({
    queryKey: ['github-user', username],
    queryFn: () => fetchData(username),
    enabled: !!username,
    staleTime: 1000 * 60 * 5
  });
}

