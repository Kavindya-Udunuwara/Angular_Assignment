import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PostCardComponent } from './post-card.component';
import { By } from '@angular/platform-browser';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    // Create a spy for Router
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [PostCardComponent],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;

    // Provide default post input to avoid undefined errors in template
    component.post = { id: 1, title: 'Default Title', body: 'Default body text' };
    component.index = 0;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct cardClass based on index', () => {
    component.index = 7;
    expect(component.cardClass).toBe('bg-color-2'); // 7 % 5 = 2

    component.index = 0;
    expect(component.cardClass).toBe('bg-color-0');

    component.index = 4;
    expect(component.cardClass).toBe('bg-color-4');
  });

  it('should navigate to detail page on goToDetail()', () => {
    component.post = { id: 123 };
    component.goToDetail();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/posts', 123]);
  });

  describe('truncate()', () => {
    it('should truncate text longer than maxLength', () => {
      const longText = 'a'.repeat(150);
      const result = component.truncate(longText, 100);
      expect(result.length).toBe(103); // 100 chars + "..."
      expect(result.endsWith('...')).toBeTrue();
    });

    it('should return text unchanged if shorter than maxLength', () => {
      const shortText = 'short text';
      const result = component.truncate(shortText, 100);
      expect(result).toBe(shortText);
    });

    it('should use default maxLength if none provided', () => {
      const longText = 'b'.repeat(120);
      const result = component.truncate(longText);
      expect(result.length).toBe(103); // default 100 + "..."
    });

    it('should return empty string if text is undefined', () => {
      const result = component.truncate(undefined as any)

      expect(result).toBe('');
    });
  });

  it('should render post title and truncated body', () => {
    component.post = {
      title: 'Test Title',
      body: 'a'.repeat(300),
    };
    component.index = 3;
    fixture.detectChanges();

    const cardElement: HTMLElement = fixture.nativeElement.querySelector('.post-card');
    expect(cardElement.classList).toContain('bg-color-3');

    const h3 = cardElement.querySelector('h3');
    expect(h3?.textContent).toBe('Test Title');

    const p = cardElement.querySelector('p');
    // Should show first 100 chars + "..."
    expect(p?.textContent).toContain('a'.repeat(100));
    expect(p?.textContent?.endsWith('...')).toBeTrue();
  });

  it('should call goToDetail() when post card is clicked', () => {
    component.post = { id: 42, body: 'some body' };
    fixture.detectChanges();

    const cardDiv = fixture.debugElement.query(By.css('.post-card'));
    cardDiv.triggerEventHandler('click', null);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/posts', 42]);
  });

});
