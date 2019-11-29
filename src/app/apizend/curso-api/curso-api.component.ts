import { Component, OnInit } from '@angular/core';
import {CursoApiService} from "../services/curso-api.service";
import {Curso} from "../Models/curso.model";

@Component({
  selector: 'app-curso-api',
  templateUrl: './curso-api.component.html',
  styleUrls: ['./curso-api.component.css']
})
export class CursoApiComponent implements OnInit {
  public cursos: Curso[];
  public curso: Curso;

  constructor(private cursoApi: CursoApiService) {
    this.curso = new Curso(null, null, null, null);
  }

  private cursoSuscripcion () {
    this.cursoApi.getCurso().subscribe(
      resp => {
        this.cursos = [];
        // @ts-ignore
        resp.body.forEach((elem, i) => {
          this.cursos.push(elem);
          console.log(elem);
        });
      },
      err => { console.log('No se ha podido cargar los datos.');
      }
    );
  }

  ngOnInit() {
    this.cursoSuscripcion();
  }

  nuevo(): void {
    this.cursoApi.nuevo(this.curso).subscribe(
      resp => {
        this.cursoSuscripcion();
      },
      err => {
        console.log("Error al grabar el curso");
      }
    );
  }
}
