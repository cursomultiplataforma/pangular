import { Injectable } from '@angular/core';
import {Usuario} from "../Models/usuario.model";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  /*
  Utilizamos el service para comunicar unos componentes con otros
  - Por limpieza lo suyo es que estén en una carpeta fuera de un componente concreto
  - Podríamos decir que es el equivalente al Controller de Zend
  */

  private _usuarios: Usuario[];
  private _usuarios$ = new Subject<Usuario[]>(); // el $ es convención de nombrado para Observables

  constructor() {
    this._usuarios = [];
  }

  /* Podemos tener cualquier tipo de funciones en él */
  cuantos () {
    alert(this._usuarios.length);
  }

  public getUsuarios() {
    return this._usuarios;
  }

  public getUsuarios$(): Observable<Usuario[]> {
    return this._usuarios$.asObservable();
  }

  /* Recibe un objeto usuario y lo graba en nuestro array de usuarios  */
  agregaUsuario(usuario: Usuario) {
    this._usuarios.push(usuario);
    this._usuarios$.next(this._usuarios);
  }

  /* Recibe un objeto usuario, busca a cual corresponde en nuestro array y le modifica los valores */
  modificarUsuario(usuario: Usuario) {
    this._usuarios.forEach((item, index, dat) => {
      if (item.login === usuario.login) {
        item.nombre = usuario.nombre;
        item.apellido1 = usuario.apellido1;
        item.apellido2 = usuario.apellido2;
        item.edad = usuario.edad;
      }
    });
  }

  /*
  Recibe un objeto usuario, sólo tiene interes el valor de login (clave), busca a cual corresponde
  esa clave y lo elmina de nuestro array de usuarios
   */
  borrar (usuario: Usuario) {
    this._usuarios.forEach((item, index, dat) => {
      if (item.login === usuario.login) {
        this._usuarios.splice(index,1); // Borra desde el index 1 elemento, podrían ser varios
      }
    });
  }

  /* Genera un objeto usuario vacio */
  nuevoUsuario(): Usuario {
    // Todos null para crearlo sin valores concretos
    // Importante edad = null porque al ser numérco no se puede poner = '' y no queremos inicializaron con un valor
    return  new Usuario(null,null,null,null,null);
  }

}
