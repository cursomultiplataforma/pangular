import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OneComponent} from './secciones/one/one.component';
import {TwoComponent} from './secciones/two/two.component';
import {DirectivaifComponent} from './secciones/directivaif/directivaif.component';
import {DirectivaforComponent} from './secciones/directivafor/directivafor.component';
import {DirectivaswitchComponent} from './secciones/directivaswitch/directivaswitch.component';
import {DirectivamodelComponent} from './secciones/directivamodel/directivamodel.component';
import {PadreComponent} from './secciones/comunicacion/padre/padre.component';
import {HijoComponent} from './secciones/comunicacion/hijo/hijo.component';
import {ObserverComponent} from './secciones/observer/observer.component';
import {ErrorComponent} from './secciones/error/error.component';
import {Ej2Component} from './secciones/observer/ej2/ej2.component';
import {Ej3Component} from './secciones/observer/ej3/ej3.component';
import {PostsComponent} from './apicloud/posts/posts.component';
import {CommentsComponent} from './apicloud/comments/comments.component';

const routes: Routes = [
  // EJERCICIOS
  {path: '', pathMatch: 'full', component: ErrorComponent},
  {path: 'one', pathMatch: 'full', component: OneComponent},
  {path: 'two', pathMatch: 'full', component: TwoComponent},
  {path: 'if', pathMatch: 'full', component: DirectivaifComponent},
  {path: 'for', pathMatch: 'full', component: DirectivaforComponent},
  {path: 'switch', pathMatch: 'full', component: DirectivaswitchComponent},
  {path: 'model', pathMatch: 'full', component: DirectivamodelComponent},
  {path: 'padre', pathMatch: 'full', component: PadreComponent},
  {path: 'hijo', pathMatch: 'full', component: HijoComponent},
  {path: 'observer', pathMatch: 'full', component: ObserverComponent},
  {path: 'observer2', pathMatch: 'full', component: Ej2Component},
  {path: 'observer3', pathMatch: 'full', component: Ej3Component},
  // API CLOUD
  {path: 'posts', pathMatch: 'full', component: PostsComponent},
  {path: 'comments', pathMatch: 'full', component: CommentsComponent},
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
