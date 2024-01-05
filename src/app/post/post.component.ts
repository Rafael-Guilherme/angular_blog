import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import postsData from '../../data/posts/posts.json';
import { DateService } from '../../service/date.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  allPosts: any[] = postsData.posts
  posts: any[] = this.allPosts
  activeCategory: string = 'Todas';

  constructor(private router: Router, private dateService: DateService) {}

  redirectToPostPage(postId: string): void {
    this.router.navigate(['/post-page', postId]);
  }

  filterByCategory(category: string): void {
    if (category === 'Todas') {
      this.posts = this.allPosts
    } else {
      this.posts = this.allPosts.filter(post => post.category === category)
    }
  }

  uniqueCategories(): string[] {
    return Array.from(new Set(this.allPosts.map(post => post.category)));
  }

  getDateService(): DateService {
    return this.dateService;
  }

}
