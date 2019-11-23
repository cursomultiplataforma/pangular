export class Usuario {
  /*
  Nos vendría bien un constructor vacío
  No se permite polimorfimos, nos tocará crearlo con todos null
  */
  constructor (login: string, nombre: string, apellido1: string, apellido2: string, edad: number) {
    this.login = login;
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.edad = edad;
  }

  login: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  edad: number;
}
