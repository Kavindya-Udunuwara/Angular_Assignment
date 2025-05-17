
import { Injectable } from '@angular/core';
import { POSTS } from '../mock-data/mock-posts';
import { COMMENTS } from '../mock-data/mock-comments';
import { Post, Comment } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsPerPage = 10;

  constructor() {}

  getPosts(page: number): { next: boolean, result: Post[] } {
    const startIndex = page * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    const result = POSTS.slice(startIndex, endIndex);
    const next = endIndex < POSTS.length;
    return { next, result };
  }

  getPost(id: number): Post {
    const post = POSTS.find(p => p.id === id);
    if (!post) throw new Error('Post not found');
    return post;
  }

  getComments(postId: number): Comment[] {
    return COMMENTS.filter(comment => comment.postId === postId);
  }
}
