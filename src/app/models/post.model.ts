export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  userId: number;
  createdAt: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
