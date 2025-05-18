import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostListComponent } from './post-list.component';
import { PostService } from '../../services/post.service';

const mockPostsPage1 = {
  result: [
    {
      id: 1,
      title: 'Post 1',
      body: 'Body 1',
      tags: ['tag1', 'tag2'],
      userId: 10,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Body 2',
      tags: ['tag3'],
      userId: 11,
      createdAt: new Date().toISOString(),
    },
  ],
  next: true,
};

const mockPostsPage2 = {
  result: [
    {
      id: 3,
      title: 'Post 3',
      body: 'Body 3',
      tags: ['tag1'],
      userId: 12,
      createdAt: new Date().toISOString(),
    },
  ],
  next: false,
};


describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let postServiceSpy: jasmine.SpyObj<PostService>;

  beforeEach(async () => {
    postServiceSpy = jasmine.createSpyObj('PostService', ['getPosts']);

    await TestBed.configureTestingModule({
      imports: [PostListComponent],
      providers: [{ provide: PostService, useValue: postServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    postServiceSpy.getPosts.and.returnValue(mockPostsPage1);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should load posts on ngOnInit', () => {
    postServiceSpy.getPosts.and.returnValue(mockPostsPage1);

    component.ngOnInit();

    expect(postServiceSpy.getPosts).toHaveBeenCalledWith(0);
    expect(component.posts.length).toBe(2);
    expect(component.posts[0].title).toBe('Post 1');
    expect(component.hasMore).toBeTrue();
    expect(component.currentPage).toBe(1);
  });

  it('should append posts and update pagination in loadMore()', () => {
    postServiceSpy.getPosts.and.returnValue(mockPostsPage1);
    component.loadMore();

    expect(component.posts.length).toBe(2);
    expect(component.hasMore).toBeTrue();
    expect(component.currentPage).toBe(1);

    postServiceSpy.getPosts.and.returnValue(mockPostsPage2);
    component.loadMore();

    expect(postServiceSpy.getPosts).toHaveBeenCalledWith(1);
    expect(component.posts.length).toBe(3);
    expect(component.posts[2].title).toBe('Post 3');
    expect(component.hasMore).toBeFalse();
    expect(component.currentPage).toBe(2);
  });
});
