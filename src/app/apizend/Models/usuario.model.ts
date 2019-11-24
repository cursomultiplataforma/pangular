export class Usuario {
  /*
  Nos vendría bien un constructor vacío
  No se permite polimorfimos, ya veremos que nos tocará crear algún objeto con todo null
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
