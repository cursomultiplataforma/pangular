import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Usuario} from "../Models/usuario.model";
import {UsuariosDosService} from "../services/usuario-dos.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-usuario-dos',
  templateUrl: './usuario-dos.component.html',
  styleUrls: ['./usuario-dos.component.css']
})
export class UsuarioDosComponent implements OnInit {
  public usuarios: Usuario[];
  public mensaje;
  public cuantos;

  borrar(login): void {
    alert(login);
  }

  constructor(private usuarioDos: UsuariosDosService) {
    this.usuarioDos.getUsuarios().subscribe(
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

  //constructor(private usuarioDos: UsuariosDosService) { }
/*
  ngOnInit() {
    this.usuarioDos.getUsuarios().subscribe(
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
  constructor(private usuarioDos: UsuariosDosService) {

  }
ngOnInit(): void {
}

ngAfterViewInit () {
  this.usuarioDos.getUsuarios().subscribe(
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
}
