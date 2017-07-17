import { Injectable } from '@angular/core';

import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

  goBack(): void {
    this.location.back();
  }
}
