import { Injectable } from '@angular/core';
import {Usuario} from "../Models/usuario.model";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuarios: Usuario[];
  private usuarios$ = new Subject<Usuario[]>(); // el $ es convención de nombrado

  constructor() {
    this.usuarios = [];
  }

  public getUsuarios() {
    return this.usuarios;
  }

  public getUsuarios$(): Observable<Usuario[]> {
    return this.usuarios$.asObservable();
  }

  agregaUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
    this.usuarios$.next(this.usuarios);
  }

  cuantos () {
    alert(this.usuarios.length);
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
