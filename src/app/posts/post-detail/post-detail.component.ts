import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post, Comment } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, CommentComponent],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'], // fixed from styleUrl
})
export class PostDetailComponent implements OnInit {
  post!: Post;
  comments: Comment[] = [];
  index: number = 0;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.index = id;  // Use the route param as index
    this.post = this.postService.getPost(id);
    this.comments = this.postService.getComments(id);
  }

  goBack(): void {
    this.location.back();
  }

  get detailClass(): string {
    return `bg-color-${this.index % 5}`;
  }
}
