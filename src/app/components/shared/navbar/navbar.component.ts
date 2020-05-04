import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  private _router;

  constructor(router: Router) {
    this._router = router;
  }

  ngOnInit(): void {
  }

  buscarHeroe(texto: string): void {
    this._router.navigate( [ 'search', texto ] );
  }
}
