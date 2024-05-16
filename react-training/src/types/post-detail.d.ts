export interface IPostDetail {
    id: number;
    avatar: string;
    username: string;
    publishedAt: string;
    title: string;
    tags: string[];
    reactions: number;
    comments: number;
}