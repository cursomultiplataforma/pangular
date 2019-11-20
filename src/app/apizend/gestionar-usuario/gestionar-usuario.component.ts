import { Component, OnInit } from '@angular/core';
import {Usuario} from "../Models/usuario.model";
import {Observable, Subscription} from "rxjs";
import {UsuariosService} from "../services/usuarios.service";
import {loadRules} from "tslint";

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.css']
})
export class GestionarUsuarioComponent implements OnInit {

  usuarios: Usuario[];
  usuarios$: Observable<Usuario[]>;
  usuariosSuscripcion: Subscription;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuarios();
    this.usuarios$ = this.usuariosService.getUsuarios$();
    this.usuariosSuscripcion = this.usuarios$.subscribe(usuarios => this.usuarios = usuarios);
  }

  borrar(login): void {
    alert(login);
  }

  ngOnDestroy() {
    /*
    Realmente no es necesario un "destructor" porque Angular gestiona muy bien la liberación de recursos
    Solamente será interesante si queremos hacer algo diferente al estándar
    */
   this.usuariosSuscripcion.unsubscribe();
  }
}
