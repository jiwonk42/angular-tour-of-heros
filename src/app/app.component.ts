import { Component } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Tour of Heros';
  selectedHero: Hero;
  heroes: Hero[] = [
    new Hero(1, 'Windstorm'),
    new Hero(2, 'Spiderman'),
    new Hero(3, 'Superman')
  ];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
