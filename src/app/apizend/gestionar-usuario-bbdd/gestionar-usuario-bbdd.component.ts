import { Component, OnInit } from '@angular/core';
import {Usuario} from "../Models/usuario.model";
import {Observable, Subscription} from "rxjs";
import {UsuariosService} from "../services/usuarios.service";

@Component({
  selector: 'app-gestionar-usuario-bbdd',
  templateUrl: './gestionar-usuario-bbdd.component.html',
  styleUrls: ['./gestionar-usuario-bbdd.component.css']
})
export class GestionarUsuarioBbddComponent implements OnInit {

  private usuarios: Usuario[];
  private usuarios$: Observable<Usuario[]>;
  private usuariosSuscripcion: Subscription;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuarios();
    this.usuarios$ = this.usuariosService.getUsuarios$();
    this.usuariosSuscripcion = this.usuarios$.subscribe(usuarios => this.usuarios = usuarios);
  }

  borrar(login): void {
    alert(login);
  }
}
