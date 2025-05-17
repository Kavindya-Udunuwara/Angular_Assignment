import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})


export class PostCardComponent {

  @Input() post: any;

  @Input() index!: number;

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['/posts', this.post.id]);
  }
  get cardClass(): string {
    return `bg-color-${this.index % 5}`;
  }

}
