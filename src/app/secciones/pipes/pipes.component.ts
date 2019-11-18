import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  numero = 100.485;
  dinero = 120.584;
  fecha = Date.now();
  objeto = {nombre: 'Daniel', curso: 'Curso multiplataforma', asistentes: 15};
  cadena = 'Esto es una cadeNa A conVERTIR';

  constructor() { }

  ngOnInit() {
  }

}
