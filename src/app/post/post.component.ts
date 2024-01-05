import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DateService } from '../../service/date.service';
import { FooterComponent } from '../footer/footer.component';
import { Post } from '../../interface/post.interface';
import postsData from '../../data/posts/posts.json';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgFor, RouterLink, FooterComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  allPosts: Post[] = postsData.posts
  posts: Post[] = this.allPosts
  activeCategory: string = '';

  constructor(private router: Router, private dateService: DateService) {}

  redirectToPostPage(postId: string): void {
    this.router.navigate(['/post-page', postId]);
  }

  filterByCategory(category: string): void {
    if (category === 'Todos') {
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
