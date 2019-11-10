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
    HijoComponent
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
