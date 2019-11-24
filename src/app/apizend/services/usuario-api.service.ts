import { Injectable } from '@angular/core';
import {Usuario} from '../Models/usuario.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {
  private apiUrl = 'http://localhost/pzend/public/';

  constructor(private http: HttpClient) {  }

  private static crearHeaders() {
    const options: any = {
      headers: new HttpHeaders(),
      params: new HttpParams(),
      responseType: 'json',
      observe: 'response'
    };
    return options;
  }
  private static updateHeaders() {
    const options: any = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      }),
      params: new HttpParams(),
      responseType: 'json',
      observe: 'response'
    };
    return options;
  }

  public getUsuarios() {
    return this.http.get<Usuario[]>(this.apiUrl + 'usuario', UsuarioApiService.crearHeaders());
  }

  public modificarUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(this.apiUrl + 'usuario' + '/' + usuario.login, usuario, UsuarioApiService.crearHeaders());
  }

  public borrarUsuario(usuario: Usuario) {
    return this.http.delete<Usuario>(this.apiUrl + 'usuario' + '/' + usuario.login, UsuarioApiService.updateHeaders());
  }

  public agregarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.apiUrl + 'usuario', usuario, UsuarioApiService.updateHeaders());
  }

}
