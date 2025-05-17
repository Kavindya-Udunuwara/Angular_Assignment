import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Comment } from '../../models/post.model';

@Component({
  selector: 'app-comment',
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  @Input() comments: Comment[] = [];

}
