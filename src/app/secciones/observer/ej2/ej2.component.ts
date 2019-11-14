import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-ej2',
  templateUrl: './ej2.component.html',
  styleUrls: ['./ej2.component.css']
})
export class Ej2Component implements OnInit {

  valores: number[] = [];
  completado: boolean;
  // Creamos un observable simple con tres valores
  private myObservable = of(1, 2 , 3);
  private myObserver;

  constructor() {
    this.completado = false;
  }

  ngOnInit() {
    // Creamos el objeto observer
    this.myObserver = {
      next: x => {
        console.log('Observer muestra un valor en next": ' + x);
        this.valores.push(x);
      },
      error: err => console.error('Observer informa que hubo un error: ' + err),
      complete: () => {
        console.log('Observer informa de que ha terminado');
        this.completado = true;
      },
    };
  }

  suscribirse() {
    // Nos suscribimos para objetener datos
    this.myObservable.subscribe(this.myObserver);
  }
}
