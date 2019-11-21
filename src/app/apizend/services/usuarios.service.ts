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

  cuantos () {
    /*
    Podemos tener cualquier tipo de funciones en él
     */
    alert(this._usuarios.length);
  }

  public getUsuarios() {
    return this._usuarios;
  }

  public getUsuarios$(): Observable<Usuario[]> {
    return this._usuarios$.asObservable();
  }

  agregaUsuario(usuario: Usuario) {
    this._usuarios.push(usuario);
    this._usuarios$.next(this._usuarios);
  }

  nuevoUsuario(): Usuario {
    return {
      nombre: '',
      apellido1: '',
      apellido2: '',
      login: '',
      edad: 0
    };
  }

}
