
export interface GitHubUser {
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
    email: string;
    public_repos: number;
    html_url: string;
}

export interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    created_at: string;
    updated_at: string;
}

export interface GitHubData {
    user: GitHubUser;
    repos: GitHubRepo[];
}
