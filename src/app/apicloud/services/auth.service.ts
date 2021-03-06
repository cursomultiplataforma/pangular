import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private estadoLogin = false;
  @Output() logueado: EventEmitter<boolean> = new EventEmitter();
  @Output() verEjerciciosEmitter: EventEmitter<boolean> = new EventEmitter();
  private sesionLogin = 'usuarioEnSesion';
  private sesionVerEjercicios = 'verEjerciciosEnSesion';

  constructor(private http: HttpClient) { }

  private static crearHeaders() {
    const options: any = {
      responseType: 'json',
      observe: 'response'
    };
    return options;
  }

  login(username: string) {
    this.http.get('https://jsonplaceholder.typicode.com/users/' + username, AuthService.crearHeaders()).subscribe(
      () => {
        this.estadoLogin = true;
        sessionStorage.setItem(this.sesionLogin, btoa(username));
        this.logueado.emit(this.estadoLogin);
        this.verEjerciciosEmitter.emit(this.estadoLogin);
      },
      () => {
        this.estadoLogin = false;
      }
    );
  }

  estaLogueado() {
    this.estadoLogin = sessionStorage.getItem(this.sesionLogin) !== '' && sessionStorage.getItem(this.sesionLogin) !== null;
    return this.estadoLogin;
  }

  desconectar() {
    sessionStorage.removeItem(this.sesionLogin);
    sessionStorage.removeItem(this.sesionVerEjercicios);
    this.estadoLogin = false;
    this.logueado.emit(this.estadoLogin);
    this.verEjerciciosEmitter.emit(this.estadoLogin);
  }

  getUser() {
    return atob(sessionStorage.getItem(this.sesionLogin));
  }

  setVerEjercicios(estado) {
    sessionStorage.setItem(this.sesionVerEjercicios, estado);
    this.verEjerciciosEmitter.emit(estado === 'SI');
  }

  verEjercicios() {
    return sessionStorage.getItem(this.sesionLogin) !== ''
      && sessionStorage.getItem(this.sesionLogin) !== null
      && sessionStorage.getItem(this.sesionVerEjercicios) === 'SI';
  }
}
