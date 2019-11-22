import { Component, OnInit } from '@angular/core';
import {Usuario} from "../Models/usuario.model";
import {Observable, Subscription} from "rxjs";
import {UsuariosService} from "../services/usuarios.service";

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.css']
})
export class GestionarUsuarioComponent implements OnInit {

  private usuarios: Usuario[];
  private usuarios$: Observable<Usuario[]>;
  private usuariosSuscripcion: Subscription;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    /*
    Se ejecuta cada vez que se carga el componente
    Guardo en este componente el array de usuarios
    Genero el observer y me suscribo a él, de esta forma recibo todos los cambios
     */
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
