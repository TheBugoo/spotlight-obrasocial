import { Component, OnInit } from '@angular/core';
import { Pasaje } from '../../models/pasaje';
import { PasajeservicioService } from 'src/app/services/pasajeservicio.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css'],
})
export class Punto3Component implements OnInit {
  pasaje: Pasaje;
  pasajes: Array<Pasaje>;
  descuento: number = 0;
  show: boolean = false;
  constructor(private pasajeService: PasajeservicioService) {
    this.pasaje = new Pasaje();
    this.pasajes = new Array<Pasaje>();

    //this.refreshPasajes();
  }
  public guardarPasaje() {
    this.pasaje.fechaCompra = new Date();
    this.pasajeService.addPasaje(this.pasaje);
    this.pasajes = this.pasajeService.getPasaje();
    this.pasaje = new Pasaje();
    console.log(this.pasajes);
    console.log('Guardando...');
  }
  public refreshPasajes() {
    this.pasajes = this.pasajeService.getPasaje();
  }
  public borrarPasaje(pasaj: Pasaje) {
    this.pasajeService.deletePasaje(pasaj);
    this.refreshPasajes();
    console.log(this.pasajes);
  }
  public cleanPasaje() {
    this.pasaje = new Pasaje();
  }
  public modificarPasaje() {
    this.pasajeService.updatePasaje(this.pasaje);
    this.precioSegunCategoria();
    this.pasaje = new Pasaje();
    this.refreshPasajes();
  }

  public seleccionarPasaje(pasaj: Pasaje) {
    this.pasaje = pasaj;
  }
  public precioSegunCategoria() {
    this.pasaje.preciototal = 0;
    if (this.pasaje.categoriaPasajero == 'j') {
      this.pasaje.preciototal = (this.pasaje.precioPasaje * 50) / 100;
      this.descuento = (this.pasaje.precioPasaje * 50) / 100;
      console.log(this.pasaje.preciototal);
      this.show = true;
    }
    if (this.pasaje.categoriaPasajero == 'm') {
      this.pasaje.preciototal =
        this.pasaje.precioPasaje - (this.pasaje.precioPasaje * 25) / 100;
      this.descuento =
        this.pasaje.precioPasaje - (this.pasaje.precioPasaje * 25) / 100;
      console.log(this.pasaje.preciototal);
      this.show = true;
    }
    if (this.pasaje.categoriaPasajero == 'a') {
      this.descuento = this.pasaje.precioPasaje;
      this.pasaje.preciototal = this.pasaje.precioPasaje;
      this.show = true;
    }
  }
  ngOnInit(): void {}
}
