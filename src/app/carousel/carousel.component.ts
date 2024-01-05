import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CarouselModule } from '@coreui/angular';
import postsData from '../../data/posts/posts.json'

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides: any[] = this.randomSlides().slice(0, 3);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isSmallScreen(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth <= 768;
    }
    return false;
  }

  randomSlides(): any[] {
    const shuffledSlides = [...postsData.posts]; // Cria uma cópia do array original
    for (let i = shuffledSlides.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSlides[i], shuffledSlides[j]] = [shuffledSlides[j], shuffledSlides[i]];
    }
    return shuffledSlides;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    console.log('Window resize', event);
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
