import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {

  constructor(private heroService: HeroService) {}

  title: string = 'Tour of Heros';
  heroes: Hero[];
  selectedHero: Hero;

  /*heroes: Hero[] = [
    new Hero(1, 'Windstorm'),
    new Hero(2, 'Spiderman'),
    new Hero(3, 'Superman')
  ];*/

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
