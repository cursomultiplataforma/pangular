import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Curso} from "../Models/curso.model";

@Injectable({
  providedIn: 'root'
})
export class CursoApiService {

  constructor(private http: HttpClient) { }

  private headers() {
    const options: any = {
      headers: new HttpHeaders(),
      params: new HttpParams(),
      responseType: 'json',
      observe: 'response'
    };
    return options;
  }

  public getCurso() {
    return this.http.get<Curso[]>('http://localhost/pzend/public/curso', this.headers());
  }

  public nuevo(curso: Curso) {
    return this.http.post<Curso[]>('http://localhost/pzend/public/curso', curso, this.headers());
  }

}
