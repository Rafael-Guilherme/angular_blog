import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { FooterComponent } from '../footer/footer.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CardComponent, FavoritesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
