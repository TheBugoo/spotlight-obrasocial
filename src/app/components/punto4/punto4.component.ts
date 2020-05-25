import { Component, OnInit } from '@angular/core';
import { Palabra } from '../../models/palabra';
import { PalabrajuegoService } from 'src/app/services/palabrajuego.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css'],
})
export class Punto4Component implements OnInit {
  palabra: Palabra;
  recorrer: number = 0;
  palabrafins: Array<String>;
  finish: string;
  letra: Array<String>;
  palabras: Array<Palabra>;
  enIngles: Array<String>;
  palabraIngresadaU: Array<String>;
  vidas: number = 7;
  puntos: number = 0;
  abecedario = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'LE',
    'FO',
    'RA',
    'TA',
  ];
  letrasIngresadas: number;
  longitudPalabraingresada: number;

  letra0: String;
  letra1: String;
  letra2: String;
  letra3: String;
  letra4: String;
  letra5: String;
  letra6: String;
  letra7: String;
  constructor(private palabrajuego: PalabrajuegoService) {
    this.generarPalabras();
    this.start();
  }

  public generarPalabras() {
    this.palabras = this.palabrajuego.getPalabras();
  }

  public start() {
    this.letra0 = '';
    this.letra1 = '';
    this.letra2 = '';
    this.letra3 = '';
    this.letra4 = '';
    this.letra5 = '';
    this.letra6 = '';
    this.letra7 = '';
    this.letrasIngresadas = 0;
    this.palabra = this.palabras[this.letrasIngresadas];
    this.longitudPalabraingresada = this.palabra.ingles.length;
    this.enIngles = this.palabra.ingles.split('');
    var palabraUsuario = this.palabra.ingles;
    palabraUsuario = palabraUsuario.replace(/./gi, ' ');
    this.palabraIngresadaU = palabraUsuario.split('');
  }

  public asignarLetras() {
    this.palabraIngresadaU[0] = this.letra0;
    this.palabraIngresadaU[1] = this.letra1;
    this.palabraIngresadaU[2] = this.letra2;
    this.palabraIngresadaU[3] = this.letra3;
    this.palabraIngresadaU[4] = this.letra4;
    this.palabraIngresadaU[5] = this.letra5;
    this.palabraIngresadaU[6] = this.letra6;
    this.palabraIngresadaU[7] = this.letra7;
  }
  public comprobar() {
    if (this.palabraIngresadaU.join('') == this.enIngles.join('')) {
      alert('¡CORRECTO!, Son iguales ');
      this.next();
      this.puntos = this.puntos + 10;
    } else {
      alert('¡INCORRECTO!, Pierdes una vida');
      this.vidas = this.vidas - 1;
    }
  }

  public next() {
    this.letra0 = '';
    this.letra1 = '';
    this.letra2 = '';
    this.letra3 = '';
    this.letra4 = '';
    this.letra5 = '';
    this.letra6 = '';
    this.letra7 = '';

    this.letrasIngresadas = 0;
  }

  public GuardarPalabra(abecedario) {
    var hola: string;
    this.letra0 = abecedario;
    this.letra1 = abecedario;
    this.letra2 = abecedario;
    this.letra3 = abecedario;
    this.letra4 = abecedario;
    this.letra5 = abecedario;
    this.letra6 = abecedario;
    this.letra7 = abecedario;
    this.palabrafins.push(abecedario);
    hola = this.palabrafins.join('');
    this.finish = hola;
    console.log(this.finish);
  }
  public GenerarPalabra() {}
  ngOnInit(): void {}
}
