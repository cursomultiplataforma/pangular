import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OneComponent} from './secciones/one/one.component';
import {TwoComponent} from './secciones/two/two.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
