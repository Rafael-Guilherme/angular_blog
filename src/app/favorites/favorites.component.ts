import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DateService } from '../../service/date.service';
import { Post } from '../../interface/post.interface';
import postsData from '../../data/posts/posts.json'

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  constructor(private router: Router, private dateService: DateService) {}

  posts: Post[] = this.randomSlides().slice(0, 3);

  randomSlides(): Post[] {
    const shuffledSlides = [...postsData.posts];
    for (let i = shuffledSlides.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSlides[i], shuffledSlides[j]] = [shuffledSlides[j], shuffledSlides[i]];
    }
    return shuffledSlides;
  }

  getDateService(): DateService {
    return this.dateService;
  }
}
