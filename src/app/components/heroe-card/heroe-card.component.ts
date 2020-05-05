import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;
  private _router;

  /*El EventEmitter retorna un number ya que el valor que queremos
  retornar al padre es la variable index */
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(router: Router) {
    this._router = router;
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe() {
    this._router.navigate( [ 'heroe', this.index ] );
    //this.heroeSeleccionado.emit( this.index );
  }

}
