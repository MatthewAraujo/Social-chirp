import { Post } from "./post";

export interface User{
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    posts: Post[];
}