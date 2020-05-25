import { Component, OnInit } from '@angular/core';
import { PuntoInteres } from './../../models/punto-interes';
@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css'],
})
export class PuntosComponent implements OnInit {
  puntoInteres: PuntoInteres;
  puntosInteres: Array<PuntoInteres>;
  urlTest: string;

  constructor() {
    this.puntoInteres = new PuntoInteres();
    this.puntosInteres = new Array<PuntoInteres>();
    this.urlTest = 'http://www.google.com/maps/place/';
  }

  ngOnInit(): void {}

  actualizarUrlTest() {
    this.urlTest =
      'http://www.google.com/maps/place/' +
      this.puntoInteres.latitud +
      ',' +
      this.puntoInteres.longitud;
  }
  guardarPuntoo() {
    console.log("Guardando...")
    this.puntoInteres.ultimamodificacion = new Date();
    this.puntosInteres.push(this.puntoInteres);
    console.log(this.puntosInteres);
    this.puntoInteres = new PuntoInteres();
  }
}
