import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) {}

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
