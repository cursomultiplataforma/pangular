import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {delay} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  mostrarError = false;
  loginForm = null;
  logueado = false;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('',
        [Validators.required]),
      password: new FormControl('',
        [Validators.required])
    });
    this.authService.logueado
      .pipe(
        delay(0),
      )
      .subscribe(
        status => {
          this.logueado = status;
          if (status) {
            this.snackBar.open('Logueado correctamente', '', { duration: 2000 });
            // this.router.navigateByUrl('/');
          }
        },
        () => {
          this.logueado = false;
        }
      );
    this.logueado = this.authService.estaLogueado();
  }

  enviarFormulario(data: FormGroup) {
    const username = data.get('username');
    const password = data.get('password');
    if (username.hasError('required') || password.hasError('required')) {
      this.mostrarError = true;
      this.logueado = false;
    } else {
      this.mostrarError = false;
      this.authService.login(username.value);
    }
  }

  ngOnDestroy() {
    this.authService.logueado.unsubscribe();
  }
}
