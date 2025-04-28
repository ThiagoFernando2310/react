import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GitHubData, GitHubRepo, GitHubUser } from "./useGit";

const fetchData = async (username: string): Promise<GitHubData> => {
  const [userResponse, reposResponse] = await Promise.all([
    axios.get<GitHubUser>(`https://api.github.com/users/${username}`),
    axios.get<GitHubRepo[]>(`https://api.github.com/users/${username}/repos?per_page=5`),
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
  });
}

