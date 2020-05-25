export class Palabra {
  id: number;
  imagen: string;
  espanol: string;
  ingles: string;

  constructor(id?: number, espanol?: string, ingles?: string, imagen?: string) {
    this.id = id;
    this.espanol = espanol;
    this.ingles = ingles;
    this.imagen = imagen;
  }
}
