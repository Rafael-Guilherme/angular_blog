import { CommonModule, NgFor, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CarouselModule } from '@coreui/angular';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, CommonModule, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides: any[] = [
    {
      id: 1,
      src: '../assets/img/angular.jpg',
      srcSmall: '../assets/img/convite.png',
      title: 'Angular Slide',
      subtitle: 'A powerful front-end framework'
    },
    {
      id: 2,
      src: '../assets/img/react.jpg',
      srcSmall: '../assets/img/imagem.jpg',
      title: 'React Slide',
      subtitle: 'A declarative and efficient UI library'
    },
    {
      id: 3,
      src: '../assets/img/vue.jpg',
      srcSmall: '../assets/img/convite.png',
      title: 'Vue Slide',
      subtitle: 'A progressive JavaScript framework'
    }
  ];


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // ngOnInit(): void {
  //   this.slides[0].src = '../assets/img/angular.jpg';
  //   this.slides[1].src = '../assets/img/react.jpg';
  //   this.slides[2].src = '../assets/img/vue.jpg';
  // }

  isSmallScreen(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth <= 768;
    }
    return false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    console.log('Window resize', event);
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
