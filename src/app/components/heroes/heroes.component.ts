import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[];
  private _heroesService;

  constructor(heroesService: HeroesService) {
    this._heroesService = heroesService;
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

}
