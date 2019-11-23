import { Injectable } from '@angular/core';
import {Usuario} from "../Models/usuario.model";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosDosService {

  constructor(private http: HttpClient) {
  }

  private static crearHeaders() {
    const options: any = {
      headers: new HttpHeaders(),
      params: new HttpParams(),
      responseType: 'json',
      observe: 'response'
    };
    return options;
  }

  public getUsuarios() {
    return this.http.get<Usuario[]>('http://localhost/pzend/public/usuario', UsuariosDosService.crearHeaders());
  }

}
