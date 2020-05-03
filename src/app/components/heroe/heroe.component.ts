import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private _activatedRoute;
  private _heroesServices;
  public heroe: any = {};

  constructor(activatedRoute: ActivatedRoute,
              heroeService: HeroesService) {
    this._activatedRoute = activatedRoute;
    this._heroesServices = heroeService;
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesServices.getHeroe(params.id);
      console.log(this.heroe);
    });
  }

}
