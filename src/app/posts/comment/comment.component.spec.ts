import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { Comment } from '../../models/post.model';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, CommentComponent], // import standalone component here
    }).compileComponents();

    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should accept input comments array', () => {
    const mockComments: Comment[] = [
      {
        id: 12,
        postId: 15,
        name: 'kavi',
        email: 'kavi@gmail.com',
        body: 'Test comment',
      },
    ];
    component.comments = mockComments;
    fixture.detectChanges();
    expect(component.comments.length).toBe(1);
    expect(component.comments[0].body).toBe('Test comment');
  });
});
