import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OneComponent} from './secciones/one/one.component';
import {TwoComponent} from './secciones/two/two.component';
import {DirectivaifComponent} from './secciones/directivaif/directivaif.component';


const routes: Routes = [
  {
    path: 'one',
    pathMatch: 'full',
    component: OneComponent
  },
  {
    path: 'two',
    pathMatch: 'full',
    component: TwoComponent
  },
  {
    path: 'if',
    pathMatch: 'full',
    component: DirectivaifComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
