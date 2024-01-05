import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import postsData from '../../data/posts/posts.json';
import { DateService } from '../../service/date.service';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css',
})
export class PostPageComponent {
  postId: string | null = null;
  posts: any[] = [];

  constructor(private route: ActivatedRoute, private dateService: DateService) {}

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    if (this.postId) {
      this.fetchPost();
    } else {
      this.fetchAllPosts();
    }
  }

  fetchPost() {
    if (this.postId !== null && this.postId !== '') {
      this.posts = postsData.posts.filter(post => post.id == parseFloat(this.postId!));
    }
  }

  fetchAllPosts() {
    this.posts = postsData.posts;
  }

  getDateService(): DateService {
    return this.dateService;
  }
}
