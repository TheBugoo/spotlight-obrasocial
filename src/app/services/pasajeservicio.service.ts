import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class PasajeservicioService {
  pasaje: Pasaje;
  pasajes: Array<Pasaje>;
  constructor() {
    this.pasajes = new Array<Pasaje>();
    this.pasaje = new Pasaje();
  }
  getPasaje() {
    return this.pasajes;
  }
  getAsignarid() {
    var idtop: number;
    idtop = 0;
    for (var i = 0; i < this.pasajes.length; i++) {
      if (idtop < this.pasajes[i].id) {
        idtop = this.pasajes[i].id;
      }
    }
    return idtop + 1;
  }
  deletePasaje(pasaj: Pasaje) {
    var borrar = this.pasajes.findIndex((hola: Pasaje) => hola.id == pasaj.id);
    console.log(borrar);
    this.pasajes.splice(borrar, 1);
  }
  addPasaje(pasaje: Pasaje) {
    pasaje.id = this.getAsignarid();
    this.pasajes.push(pasaje);
  }
  updatePasaje(pasaj: Pasaje) {
    var borrar = this.pasajes.findIndex((hola: Pasaje) => hola.id == pasaj.id);
    console.log(borrar);
    this.pasajes.splice(borrar, 1, pasaj);
  }
}
