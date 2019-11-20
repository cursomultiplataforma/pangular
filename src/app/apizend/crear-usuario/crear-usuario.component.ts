import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../services/usuarios.service";
import {Usuario} from "../Models/usuario.model";

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuario = this.usuariosService.nuevoUsuario();
  }

  nuevo (): void {
    /* la lógica dice que debería ir al revés, primero defino el this.usuario y luego lo paso a agregar
       Realmente, al ser un observer debería dar igual porque cualquier cambio en this.usuario se lanza
       automáticamente a su observador
     */
    this.usuariosService.agregaUsuario(this.usuario);
    this.usuario = this.usuariosService.nuevoUsuario();
  }

  cuantos (): void {
    this.usuariosService.cuantos();
  }

}
