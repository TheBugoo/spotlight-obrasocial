export class PuntoInteres {
  id: number;
  nombre: string;
  descripcion: string;
  latitud: number;
  longitud: number;
  urlmapa: string;
  ultimamodificacion: Date;

  PuntoInteres(
    id?: number,
    nombre?: string,
    descripcion?: string,
    latitud?: number,
    longitud?: number,
    urlmapa?: string,
    ultimamodificacion?: Date
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.latitud = latitud;
    this.longitud = longitud;
    this.urlmapa = urlmapa;
    this.ultimamodificacion = ultimamodificacion;
  }
}
