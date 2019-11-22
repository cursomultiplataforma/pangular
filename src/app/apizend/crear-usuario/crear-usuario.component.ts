import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../services/usuarios.service";
import {Usuario} from "../Models/usuario.model";

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit {

  private usuario: Usuario;

  /*
  Al definir una variable en el constructor, es equivalente a tenerla definida arriba
  Al ejecutarse el constructor, se crea la varaible y está disponible
   */
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuario = this.usuariosService.nuevoUsuario();
  }

  nuevo (): void {
    this.usuariosService.agregaUsuario(this.usuario); // Grabo el usuario
    this.usuario = this.usuariosService.nuevoUsuario(); // Limpio el objeto para que se muestre el formulario vacío
  }

  cuantos (): void {
    this.usuariosService.cuantos();
  }

}
