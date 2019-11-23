import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UsuarioBbddService} from "../services/usuario-bbdd.service";
import {Usuario} from "../Models/usuario.model";
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-gestionar-usuario-bbdd',
  templateUrl: './gestionar-usuario-bbdd.component.html',
  styleUrls: ['./gestionar-usuario-bbdd.component.css'],
})
export class GestionarUsuarioBbddComponent implements OnInit, AfterViewInit {
  usuarios;
  cuantos;
  columnsToDisplay: string[] = ['EDAD','NOMBRE', 'APELLIDO1', 'APELLIDO2', 'LOGIN'];
  constructor(
    private usuarioBBDD: UsuarioBbddService,
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.usuarioBBDD.getUsuarios().subscribe(
        resp => {
          // @ts-ignore /* esta directiva hace que el WebStorm no se queje de ciertos errores en la línea siguietne */
          this.usuarios = new MatTableDataSource<Usuario[]>(resp.body);
          // @ts-ignore
          this.cuantos =  resp.body.length;
          // @ts-ignore
          this.mensaje = 'Datos cargados correctamente';
        },
        err => {
          // @ts-ignore
          this.mensaje = 'Error al cargar los datos';
        }
      );
  }

}
