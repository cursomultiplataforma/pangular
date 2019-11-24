import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../apicloud/services/auth.service';
import {delay} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  logueado = true;
  verEjercicios: boolean;
  pruebas: boolean;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    @Inject(Window) private window: Window
  ) {
    /* this.router.events.subscribe(
      (e) => {
        console.log(e);
      }
    ); */
  }

  ngOnInit() {
    this.authService.logueado
      .pipe(delay(0))
      .subscribe(
        status => {
          this.logueado = status;
          if (!status) {
            this.snackBar.open('Desconectado correctamente', '', { duration: 2000 });
            this.router.navigateByUrl('/');
          }
        },
        () => {
          this.logueado = false;
          this.snackBar.open('Desconectado correctamente', '', { duration: 2000 });
        }
      );
    this.authService.verEjerciciosEmitter.pipe(delay(0)).subscribe(
      (estado) => {
        this.verEjercicios = estado;
      },
      () => {
        console.log('error al mostrar el menú de ejercicios.');
      }
    );
    this.logueado = this.authService.estaLogueado();
    this.verEjercicios = this.authService.verEjercicios();
    this.pruebas = this.window.location.hostname === 'localhost';
  }

  desconectar() {
    this.authService.desconectar();
  }

  ngOnDestroy() {
    // this.authService.logueado.unsubscribe();
  }

  miperfil() {
    this.router.navigate(['miperfil'], {
      queryParams: {
        id : this.authService.getUser()
      }
    });
  }
}
