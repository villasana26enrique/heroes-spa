import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  private _activatedRoute;
  private _heroesService;
  public heroes: any[] = [];
  public texto: string;

  constructor(activatedRoute: ActivatedRoute,
              heroesService: HeroesService) {
    this._activatedRoute = activatedRoute;
    this._heroesService = heroesService;
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      this.texto = params.texto;
      this.heroes = this._heroesService.buscarHeroes(this.texto);
    });
  }

}
