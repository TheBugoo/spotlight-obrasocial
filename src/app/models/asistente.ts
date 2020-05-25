export class Asistente {
  usuario: string;
  nombreOrg: string;
  requiereCons: boolean;

  Asistente(usuario?: string, nombreOrg?: string, requiereCons?: boolean) {
    this.usuario = usuario;
    this.nombreOrg = nombreOrg;
    this.requiereCons = requiereCons;
  }
}
