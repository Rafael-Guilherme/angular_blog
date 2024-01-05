import { NgFor } from '@angular/common'
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DateService } from '../../service/date.service';
import { Post } from '../../interface/post.interface';
import postsData from '../../data/posts/posts.json'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  allCards: Post[] = postsData.posts;
  cards: Post[] = this.allCards;
  activeCategory: string = 'Todas';

  constructor(private router: Router, private dateService: DateService) {}

  redirectToPostPage(postId: string): void {
    this.router.navigate(['/post-page', postId]);
  }

  filterByCategory(category: string): void {
    if (category === 'Todas') {
      this.cards = this.allCards
    } else {
      this.cards = this.allCards.filter(card => card.category === category)
    }
  }

  uniqueCategories(): string[] {
    return Array.from(new Set(this.allCards.map(card => card.category)));
  }

  getDateService(): DateService {
    return this.dateService;
  }

}
