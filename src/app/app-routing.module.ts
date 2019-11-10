import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OneComponent} from './secciones/one/one.component';
import {TwoComponent} from './secciones/two/two.component';
import {DirectivaifComponent} from './secciones/directivaif/directivaif.component';
import {DirectivaforComponent} from './secciones/directivafor/directivafor.component';
import {DirectivaswitchComponent} from './secciones/directivaswitch/directivaswitch.component';
import {DirectivamodelComponent} from './secciones/directivamodel/directivamodel.component';

const routes: Routes = [
  {path: 'one', pathMatch: 'full', component: OneComponent},
  {path: 'two', pathMatch: 'full', component: TwoComponent},
  {path: 'if', pathMatch: 'full', component: DirectivaifComponent},
  {path: 'for', pathMatch: 'full', component: DirectivaforComponent},
  {path: 'switch', pathMatch: 'full', component: DirectivaswitchComponent},
  {path: 'model', pathMatch: 'full', component: DirectivamodelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
