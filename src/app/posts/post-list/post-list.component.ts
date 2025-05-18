import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../post-card/post-card.component'; 


@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostCardComponent ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})

export class PostListComponent implements OnInit {
  posts: Post[] = [];
  currentPage: number = 0;
  hasMore: boolean = true;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(): void {
    const response = this.postService.getPosts(this.currentPage);
    this.posts.push(...response.result);
    this.hasMore = response.next;
    this.currentPage++;
  }

}
