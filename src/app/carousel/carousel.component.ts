import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from '@coreui/angular';
import { RouterLink } from '@angular/router';
import { Post } from '../../interface/post.interface';
import postsData from '../../data/posts/posts.json'
import { DateService } from '../../service/date.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, CommonModule, RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides: Post[] = this.randomSlides().slice(0, 3);

  constructor(private dateService: DateService) {}

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
