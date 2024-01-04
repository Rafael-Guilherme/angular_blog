import { CommonModule, NgFor, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CarouselModule } from '@coreui/angular';
import { SlidesService } from '../slides.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, CommonModule, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  slides: any[] = [
    {
      id: 1,
      src: '../assets/img/angular.jpg',
      srcSmall: '../assets/img/convite.png',
      title: 'Angular Slide',
      subtitle: 'A powerful front-end framework',
      category: 'Javascript'
    },
    {
      id: 2,
      src: '../assets/img/react.jpg',
      srcSmall: '../assets/img/imagem.jpg',
      title: 'React Slide',
      subtitle: 'A declarative and efficient UI library',
      category: 'Javascript'
    },
    {
      id: 3,
      src: '../assets/img/vue.jpg',
      srcSmall: '../assets/img/convite.png',
      title: 'Vue Slide',
      subtitle: 'A progressive JavaScript framework',
      category: 'Javascript'
    }
  ];


  constructor(@Inject(PLATFORM_ID) private platformId: Object, private slidesService: SlidesService) {}

  ngOnInit(): void {
    this.slidesService.getSlides().subscribe(data => {
      this.slides = this.randomSlides();
    });
  }

  isSmallScreen(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth <= 768;
    }
    return false;
  }

  randomSlides(): any[] {
    const randomIndices: number[] = [];
    while (randomIndices.length < 3) {
      const index = Math.floor(Math.random() * this.slides.length);
      if (!randomIndices.includes(index)) {
        randomIndices.push(index);
      }
    }
    return randomIndices.map(i => this.slides[i]);
   }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    console.log('Window resize', event);
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
