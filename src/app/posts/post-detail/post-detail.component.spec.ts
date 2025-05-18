import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostDetailComponent } from './post-detail.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post, Comment } from '../../models/post.model';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  // Mock data for testing
  const mockPost: Post = {
    id: 1,
    title: 'Test Post',
    body: 'This is a test post body.',
    tags: ['test', 'post'],
    userId: 123,
    createdAt: new Date().toISOString(),
  };

  const mockComments: Comment[] = [
    { id: 1, postId: 1, name:'Kavi',  email :'kavi@gmail.com' , body: 'Comment 1'},
    { id: 2, postId: 1, name:'ravi', email :'ravigmail.com',body: 'Comment 2'}
  ];

  // Mock ActivatedRoute with paramMap.get returning '1' (string)
  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: jasmine.createSpy('get').and.returnValue('1')
      }
    }
  };

  // Mock PostService with spy methods
  const postServiceSpy = jasmine.createSpyObj('PostService', ['getPost', 'getComments']);
  postServiceSpy.getPost.and.returnValue(mockPost);
  postServiceSpy.getComments.and.returnValue(mockComments);

  // Mock Location with spy method 'back'
  const locationSpy = jasmine.createSpyObj('Location', ['back']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: PostService, useValue: postServiceSpy },
        { provide: Location, useValue: locationSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should read the id from route params and load post and comments', () => {
    expect(activatedRouteStub.snapshot.paramMap.get).toHaveBeenCalledWith('id');
    expect(component.index).toBe(1);
    expect(postServiceSpy.getPost).toHaveBeenCalledWith(1);
    expect(postServiceSpy.getComments).toHaveBeenCalledWith(1);
    expect(component.post).toEqual(mockPost);
    expect(component.comments).toEqual(mockComments);
  });

  it('should return correct detailClass based on index', () => {
    component.index = 7;
    expect(component.detailClass).toBe('bg-color-2'); // 7 % 5 = 2

    component.index = 0;
    expect(component.detailClass).toBe('bg-color-0');
  });

  it('should call location.back() when goBack() is called', () => {
    component.goBack();
    expect(locationSpy.back).toHaveBeenCalled();
  });
});
