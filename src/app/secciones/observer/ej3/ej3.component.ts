import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-ej3',
  templateUrl: './ej3.component.html',
  styleUrls: ['./ej3.component.css']
})
export class Ej3Component implements OnInit, OnDestroy {

  private numeroMaximo = 10;
  adivinado = false;
  private numerosSubjectObserbable$ = new BehaviorSubject([]);
  numerosRandom: Array<number> = [];

  minumero: number;

  constructor() {
    this.minumero = this.randomNumber();
    this.numerosSubjectObserbable$.asObservable().subscribe(
      (numerosRandomGenerados) => {
        for (const v of numerosRandomGenerados) {
          // tslint:disable-next-line:triple-equals
          if (v == this.minumero) {
            this.adivinado = true;
          }
        }
      }
    );
  }

  ngOnInit() {
  }

  cargarNumeros() {
    this.numerosRandom = [];
    this.adivinado = false;
    for (let i = 0; i < 3; i++) {
      this.numerosRandom.push(this.randomNumber());
    }
    // this.existe(); // automatico
  }

  existe() {
    this.numerosSubjectObserbable$.next(this.numerosRandom);
  }

  randomNumber() {
    // tslint:disable-next-line:radix
    return parseInt((Math.random() * this.numeroMaximo).toFixed(0));
  }

  ngOnDestroy() {
    this.numerosSubjectObserbable$.unsubscribe();
  }
}
