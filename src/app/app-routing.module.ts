import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OneComponent} from './secciones/one/one.component';
import {TwoComponent} from './secciones/two/two.component';
import {DirectivaifComponent} from './secciones/directivaif/directivaif.component';
import {DirectivaforComponent} from './secciones/directivafor/directivafor.component';


const routes: Routes = [
  {path: 'one', pathMatch: 'full', component: OneComponent},
  {path: 'two', pathMatch: 'full', component: TwoComponent},
  {path: 'if', pathMatch: 'full', component: DirectivaifComponent},
  {path: 'for', pathMatch: 'full', component: DirectivaforComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
