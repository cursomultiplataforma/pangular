import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { OneComponent } from './secciones/one/one.component';
import { TwoComponent } from './secciones/two/two.component';
import { DirectivaifComponent } from './secciones/directivaif/directivaif.component';
import { DirectivaforComponent } from './secciones/directivafor/directivafor.component';
import { DirectivaswitchComponent } from './secciones/directivaswitch/directivaswitch.component';
import { DirectivamodelComponent } from './secciones/directivamodel/directivamodel.component';
import {FormsModule} from '@angular/forms';
import { PadreComponent } from './secciones/comunicacion/padre/padre.component';
import { HijoComponent } from './secciones/comunicacion/hijo/hijo.component';
import { ObserverComponent } from './secciones/observer/observer.component';
import { ErrorComponent } from './secciones/error/error.component';
import { Ej2Component } from './secciones/observer/ej2/ej2.component';
import { Ej3Component } from './secciones/observer/ej3/ej3.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OneComponent,
    TwoComponent,
    DirectivaifComponent,
    DirectivaforComponent,
    DirectivaswitchComponent,
    DirectivamodelComponent,
    PadreComponent,
    HijoComponent,
    ObserverComponent,
    ErrorComponent,
    Ej2Component,
    Ej3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
