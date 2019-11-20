import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService} from "../services/usuarios.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule // Lo usaremos para facilitarnos los formularios
  ],
  providers: [
    UsuariosService // Sin registrarlo como proveedor no se ejecuta
  ]
})
export class UsuariosModule { }
