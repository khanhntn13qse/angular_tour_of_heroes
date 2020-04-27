import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      {id: 11, name: 'Pikachu'},
      {id: 12, name: 'Tokepi'},
      {id: 13, name: 'Shaymin'},
      {id: 14, name: 'Rokon'},
      {id: 15, name: 'Kyukon'},
      {id: 16, name: 'Mokoko'},
      {id: 17, name: 'Denryu'},
      {id: 18, name: 'Viviyon'},
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
