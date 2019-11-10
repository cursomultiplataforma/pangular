import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit, OnDestroy {

  private numeroMaximo = 10;
  private adivinado = false;
  private organizator$: Subject<number> = new Subject();
  private suscription: Subscription;

  // tslint:disable-next-line:radix
  minumero: number;
  numeroRandom: number;

  constructor() {
    this.minumero = this.randomNumber();
  }

  notificarAlSuscriptor(numeroMiTicket, numeroRandom) {
    // tslint:disable-next-line:triple-equals
    if (numeroMiTicket == numeroRandom) {
      this.adivinado = true;
    }
  }

  ngOnInit() {
    this.suscription = this.organizator$.asObservable().subscribe(
      (elNumeroGeneradoRandom) => {this.notificarAlSuscriptor(this.minumero, elNumeroGeneradoRandom); }
    );
    setInterval(() => {this.generarNumeroRamdom(); }, 750);
  }

  generarNumeroRamdom() {
    if (!this.adivinado) {
      this.numeroRandom = this.randomNumber();
      this.organizator$.next(this.numeroRandom);
    } else {
      this.organizator$.complete();
    }
  }

  randomNumber() {
    // tslint:disable-next-line:radix
    return parseInt((Math.random() * this.numeroMaximo).toFixed(0));
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
}
