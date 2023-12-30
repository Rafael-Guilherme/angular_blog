import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from '@coreui/angular';

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
      title: 'Angular Slide',
      subtitle: 'A powerful front-end framework'
    },
    {
      id: 2,
      title: 'React Slide',
      subtitle: 'A declarative and efficient UI library'
    },
    {
      id: 3,
      title: 'Vue Slide',
      subtitle: 'A progressive JavaScript framework'
    }
  ];


  constructor() {}

  ngOnInit(): void {
    this.slides[0].src = '../assets/img/angular.jpg';
    this.slides[1].src = '../assets/img/react.jpg';
    this.slides[2].src = '../assets/img/vue.jpg';
  }


  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
