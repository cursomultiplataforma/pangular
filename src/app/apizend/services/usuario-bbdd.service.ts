import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Usuario} from "../Models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioBbddService {

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

  public getUsuarios() {
    return this.http.get<Usuario[]>('http://localhost/pzend/public/usuario', UsuarioBbddService.crearHeaders());
  }

}
