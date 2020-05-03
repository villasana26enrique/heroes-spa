import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[];
  private _heroesService;
  private _router;

  constructor(heroesService: HeroesService, router: Router) {
    this._heroesService = heroesService;
    this._router = router;
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(index: number): void {
    this._router.navigate( [ 'heroe', 'index' ] );
  }

}
