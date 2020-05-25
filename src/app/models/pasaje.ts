export class Pasaje {
  dniPasajero: number;
  precioPasaje: number;
  categoriaPasajero: string;
  fechaCompra: Date;
  id: number;
  preciototal: number;

  Pasaje(
    dniPasajero?: number,
    precioPasaje?: number,
    categoriaPasajero?: string,
    fechaCompra?: Date,
    id?: number,
    preciototal?: number
  ) {
    this.dniPasajero = dniPasajero;
    this.precioPasaje = precioPasaje;
    this.categoriaPasajero = categoriaPasajero;
    this.fechaCompra = fechaCompra;
    this.id = id;
    this.preciototal = preciototal;
  }
}
