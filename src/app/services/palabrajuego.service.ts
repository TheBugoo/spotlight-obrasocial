import { Injectable } from '@angular/core';
import { Palabra } from '../models/palabra';
import { strict } from 'assert';

@Injectable({
  providedIn: 'root',
})
export class PalabrajuegoService {
  palabras: Array<Palabra>;

  constructor() {
    this.palabras = new Array<Palabra>();
    this.palabras = [
      {
        id: 1,
        imagen: 'Leon.jpg',
        espanol: 'Leon',
        ingles: 'lion',
      },
      {
        id: 2,
        imagen: 'Foca.jpg',
        espanol: 'Foca',
        ingles: 'seal',
      },
      {
        id: 3,
        imagen: 'Rata.jpg',
        espanol: 'Rata',
        ingles: 'rat',
      },
      {
        id: 4,
        imagen: 'Pato.jpg',
        espanol: 'Pato',
        ingles: 'duck',
      },
      {
        id: 5,
        imagen: 'Sapo.jpg',
        espanol: 'Sapo',
        ingles: 'frog',
      },
      {
        id: 6,
        imagen: 'Perro.jpg',
        espanol: 'Perro',
        ingles: 'dog',
      },
      {
        id: 7,
        imagen: 'Caballo.jpg',
        espanol: 'Caballo',
        ingles: 'horse',
      },
      {
        id: 8,
        imagen: 'Oso.jpg',
        espanol: 'Oso',
        ingles: 'bear',
      },
      {
        id: 9,
        imagen: 'Abeja.jpg',
        espanol: 'Abeja',
        ingles: 'bee',
      },
      {
        id: 10,
        imagen: 'Zorro.jpg',
        espanol: 'Zorro',
        ingles: 'wolf',
      },
    ];
  }
  getPalabras() {
    return this.palabras;
  }
  getNumber() {
    var numero = Math.round(Math.random() * 9);
    return numero;
  }
}
