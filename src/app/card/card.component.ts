import { NgFor } from '@angular/common'
import { Component } from '@angular/core';
import postsData from '../../data/posts/posts.json'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  allCards: any[] = postsData.posts;
  cards: any[] = this.allCards;
  activeCategory: string = 'Todas';

  filterByCategory(category: string): void {
    if (category === 'Todas') {
      this.cards = this.allCards.slice(0,8);
    } else {
      this.cards = this.allCards.filter(card => card.category === category).slice(0,8);
    }
  }

  uniqueCategories(): string[] {
    return Array.from(new Set(this.allCards.map(card => card.category)));
  }

}
