import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import { POSTS } from '../mock-data/mock-posts';
import { COMMENTS } from '../mock-data/mock-comments';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPosts', () => {
    it('should return up to 10 posts for the first page', () => {
      const page = 0;
      const result = service.getPosts(page);
      expect(result.result.length).toBeLessThanOrEqual(10);
    });

    it('should return the correct posts for a given page', () => {
      const page = 1;
      const expected = POSTS.slice(10, 20);
      const result = service.getPosts(page);
      expect(result.result).toEqual(expected);
    });

    it('should indicate whether there is a next page', () => {
      const totalPages = Math.ceil(POSTS.length / 10);
      const result = service.getPosts(totalPages);
      expect(result.next).toBeFalse();
    });
  });

  describe('getPost', () => {
    it('should return the correct post for a valid ID', () => {
      const post = POSTS[0];
      const result = service.getPost(post.id);
      expect(result).toEqual(post);
    });

    it('should throw an error for an invalid ID', () => {
      expect(() => service.getPost(-999)).toThrowError('Post not found');
    });
  });

  describe('getComments', () => {
    it('should return comments for a valid post ID', () => {
      const postId = COMMENTS[0].postId;
      const expected = COMMENTS.filter(c => c.postId === postId);
      const result = service.getComments(postId);
      expect(result).toEqual(expected);
    });

    it('should return an empty array if no comments for the post ID', () => {
      const result = service.getComments(-999);
      expect(result).toEqual([]);
    });
  });
});
