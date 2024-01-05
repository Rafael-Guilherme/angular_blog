import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { FooterComponent } from '../footer/footer.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { DateService } from '../../service/date.service';
import { Post } from '../../interface/post.interface';
import postsData from '../../data/posts/posts.json'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CardComponent, FavoritesComponent, FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private dateService: DateService) {}

  posts: Post[] = postsData.posts
  randomPost: Post | undefined;

  ngOnInit(): void {
    this.getRandomPost();
  }

  getRandomPost(): void {
    const randomIndex = Math.floor(Math.random() * this.posts.length);
    this.randomPost = this.posts[randomIndex];
  }

  getDateService(): DateService {
    return this.dateService;
  }
}
