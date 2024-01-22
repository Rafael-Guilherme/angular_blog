import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  unencodedText: string;

  constructor() {
    this.unencodedText = encodeURIComponent('Olá! Eu vi o seu portfólio ou projeto e gostaria de entrar em contato!');
  }
}
