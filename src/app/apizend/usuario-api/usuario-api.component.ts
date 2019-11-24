import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Usuario} from "../Models/usuario.model";
import {UsuarioApiService} from "../services/usuario-api.service";

@Component({
  selector: 'app-usuario-api',
  templateUrl: './usuario-api.component.html',
  styleUrls: ['./usuario-api.component.css']
})
export class UsuarioApiComponent implements OnInit {
  private usuarios: Usuario[];
  private mensaje;
  private cuantos;
  private edito = false;
  private crear = false;
  private usuario: Usuario;

  constructor(private usuarioApi: UsuarioApiService) {
    this.usuarioApi.getUsuarios().subscribe(
      resp => {
        this.usuarios = [];
        // @ts-ignore
        resp.body.forEach((elem, i) => { this.usuarios.push(elem); });
        // @ts-ignore
        this.cuantos =resp.body.length;
        this.mensaje = 'Datos cargados correctamente';
      },
      err => {
        this.mensaje = 'Error al cargar los datos';
      }
    );
  }

  ngOnInit(): void {
  }

  //constructor(private usuarioApi: UsuarioApiService) { }
/*
  ngOnInit() {
    this.usuarioApi.getUsuarios().subscribe(
      resp => {
        this.usuarios = [];
        // @ts-ignore
        resp.body.forEach((elem, i) => { this.usuarios.push(elem); });
        // @ts-ignore
        this.cuantos =resp.body.length;
        this.mensaje = 'Datos cargados correctamente';
      },
      err => {
        this.mensaje = 'Error al cargar los datos';
      }
    );
  }
*/

/*
  constructor(private usuarioApi: UsuarioApiService) {

  }
ngOnInit(): void {
}

ngAfterViewInit () {
  this.usuarioApi.getUsuarios().subscribe(
    resp => {
      this.usuarios = [];
      // @ts-ignore
      resp.body.forEach((elem, i) => {
        this.usuarios.push(elem);
      });
      // @ts-ignore
      this.cuantos = resp.body.length;
      this.mensaje = 'Datos cargados correctamente';
    },
    err => {
      this.mensaje = 'Error al cargar los datos';
    }
  );
}
*/

  borrar(login): void {
    this.usuarioApi.borrarUsuario(new Usuario(login, null,null,null,0)).subscribe(
      resp => {
        this.mensaje = 'Datos eliminados correctamente';
        // Si los vuelvo a pedir me sale actualizado (poco óptimo, otra llamada al API)
        // this.usuarioApi.getUsuarios();

        // Más óptimo si actualizamos el array
        // @ts-ignore
        this.borrarUsuarioArray(new Usuario(resp.body,null,null,null,null));
      },
      err => {
        this.mensaje = 'Error al eliminar los datos';
      }
    );

  }
  editar(login): void {
    this.edito = true;

    this.usuarios.forEach((item, index, dat) => {
      if (item.login === login) {
        //this.usuario = item;
        this.usuario = new Usuario(item.login, item.nombre, item.apellido1, item.apellido2, item.edad);
      }
    });
  }

  actualizar(login): void{
    this.usuarioApi.modificarUsuario(this.usuario).subscribe(
      resp => {
        this.mensaje = 'Datos actualizados correctamente';
        // Si los vuelvo a pedir me sale actualizado (poco óptimo, otra llamada al API)
        // this.usuarioApi.getUsuarios();

        // Más óptimo si actualizamos el array
        // @ts-ignore
        this.modificarUsuarioArray(new Usuario(resp.body.login, resp.body.nombre,resp.body.apellido1,resp.body.apellido2,resp.body.edad))
      },
      err => {
        this.mensaje = 'Error al actualizar los datos';
      }
    );
    // Si es el mismo objeto con edito = false nos vale para que se oculte el div y listo
    this.edito = false;
    // Siempre limpiamos el this.usuario para que la siguiente acción no lleve información errónea
    this.usuario = this.nuevoUsuarioArray();
  }

  nuevo (accion): void {
    if (accion == 'grabar') {
      this.usuarioApi.agregarUsuario(this.usuario).subscribe(
        resp => {
          this.mensaje = 'Datos insertados correctamente';
          // Si los vuelvo a pedir me sale actualizado (poco óptimo, otra llamada al API)
          // this.usuarioApi.getUsuarios();

          // Más óptimo si actualizamos el array
          // @ts-ignore
          this.agregarUsuarioArray(new Usuario(resp.body.login, resp.body.nombre,resp.body.apellido1,resp.body.apellido2,resp.body.edad))
        },
        err => {
          this.mensaje = 'Error al insertados los datos';
        }
      );
      this.crear = false;
    } else {
      this.crear = true;
    }
    // Siempre limpiamos el this.usuario para que la siguiente acción no lleve información errónea
    this.usuario = this.nuevoUsuarioArray();
  }

  // Auxiliares gestión del array
  private modificarUsuarioArray (usuario: Usuario) {
    this.usuarios.forEach((item, index, dat) => {
      if (item.login === usuario.login) {
        item.nombre = usuario.nombre;
        item.apellido1 = usuario.apellido1;
        item.apellido2 = usuario.apellido2;
        item.edad = usuario.edad;
      }
    });
  }

  private borrarUsuarioArray (usuario: Usuario) {
    this.usuarios.forEach((item, index, dat) => {
      if (item.login === usuario.login) {
        this.usuarios.splice(index,1); // Borra desde el index 1 elemento, podrían ser varios
      }
    });
  }
  private agregarUsuarioArray (usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  /* Genera un objeto usuario vacio */
  private nuevoUsuarioArray(): Usuario {
    // Todos null para crearlo sin valores concretos
    // Importante edad = null porque al ser numérco no se puede poner = '' y no queremos inicializaron con un valor
    return  new Usuario(null,null,null,null,null);
  }

}
