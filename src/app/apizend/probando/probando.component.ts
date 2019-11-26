import { Component, OnInit } from '@angular/core';
import {Usuario} from "../Models/usuario.model";
import {ProbandoService} from "../services/probando.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-probando',
  templateUrl: './probando.component.html',
  styleUrls: ['./probando.component.css']
})
export class ProbandoComponent implements OnInit {

  public usuarios: Usuario[];
  public usuarios$: Observable<Usuario[]>;
  public usuariosSuscripcion: Subscription;
  public usuario: Usuario;

  constructor(private probandoService: ProbandoService) { }

  ngOnInit() {
    this.usuarios = this.probandoService.getUsuarios();
    this.usuarios$ = this.probandoService.getUsuarios$();
    this.usuariosSuscripcion = this.usuarios$.subscribe
    (usuarios => this.usuarios = usuarios);
    this.usuario = this.probandoService.nuevoUsuario();
  }

  public nuevo(): void {
    this.probandoService.agregaUsuario(this.usuario); // Grabo el usuario
    this.usuario = this.probandoService.nuevoUsuario(); // limpio el objeto para el siguiente
  }

}
