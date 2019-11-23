import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService} from "../services/usuarios.service";
import {FormsModule} from "@angular/forms";
import {UsuarioBbddService} from "../services/usuario-bbdd.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule // Lo usaremos para facilitarnos los formularios
  ],
  providers: [
    // Sin registrarlo como proveedor no se ejecuta
    UsuariosService,
    UsuarioBbddService
  ]
})
export class UsuariosModule { }
