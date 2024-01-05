import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private dateService: DateService) {}

  isSmallScreen(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth <= 768;
    }
    return false;
  }

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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    console.log('Window resize', event);
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
