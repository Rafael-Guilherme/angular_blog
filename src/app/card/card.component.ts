import { Component } from '@angular/core';
import { NgFor } from '@angular/common'
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
  cards: Post[] = this.getRandomCards(8);
  activeCategory: string = '';

  constructor(private router: Router, private dateService: DateService) {}

  redirectToPostPage(postId: string): void {
    this.router.navigate(['/post-page', postId]);
  }

  filterByCategory(category: string): void {
    if (category === 'Destaque') {
      this.cards = this.getRandomCards(8);
    } else {
       const categoryPosts = this.allCards.filter(card => card.category === category);
       this.cards = this.getRandomCardsInCategory(categoryPosts, 8);
    }
    this.activeCategory = category;
  }

  uniqueCategories(): string[] {
    return Array.from(new Set(this.allCards.map(card => card.category)));
  }

  getRandomCards(count: number): Post[] {
    const shuffledCards = [...this.allCards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    return shuffledCards.slice(0, count);
  }

  getRandomCardsInCategory(categoryPosts: Post[], count: number): Post[] {
    const shuffledCategoryPosts = [...categoryPosts];
    for (let i = shuffledCategoryPosts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCategoryPosts[i], shuffledCategoryPosts[j]] = [shuffledCategoryPosts[j], shuffledCategoryPosts[i]];
    }
    return shuffledCategoryPosts.slice(0, count);
  }

  getDateService(): DateService {
    return this.dateService;
  }
}
