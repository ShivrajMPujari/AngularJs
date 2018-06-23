import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Observable} from 'rxjs/Observable';
import { MessageService } from './message.service';
import 'rxjs/add/observable/of';

@Injectable()
export class HeroService {

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  constructor(private messageService:MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('HeroService: heroes are fetched');
    this.messageService.add('HeroService: heroes are fetched');
    return Observable.of(HEROES);
  }
  
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return Observable.of(HEROES.find(hero => hero.id === id));
  }

}
