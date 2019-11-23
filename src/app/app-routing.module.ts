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
import {Padre2Component} from './secciones/comunicacion/ej2/padre2/padre2.component';
import {Hijo2Component} from './secciones/comunicacion/ej2/hijo2/hijo2.component';
import {PipesComponent} from './secciones/pipes/pipes.component';
import {GestionarUsuarioComponent} from "./apizend/gestionar-usuario/gestionar-usuario.component";
import {UsuarioDosComponent} from "./apizend/usuario-dos/usuario-dos.component";

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
  {path: 'padre2', pathMatch: 'full', component: Padre2Component},
  {path: 'hijo2', pathMatch: 'full', component: Hijo2Component},
  {path: 'pipes', pathMatch: 'full', component: PipesComponent},
  {path: 'observer', pathMatch: 'full', component: ObserverComponent},
  {path: 'observer2', pathMatch: 'full', component: Ej2Component},
  {path: 'observer3', pathMatch: 'full', component: Ej3Component},
  // API CLOUD
  {path: 'posts', pathMatch: 'full', component: PostsComponent},
  {path: 'comments', pathMatch: 'full', component: CommentsComponent},
  // API ZEND
  {path: 'gestionar-usuario', pathMatch: 'full', component: GestionarUsuarioComponent},
  {path: 'usuario-dos', pathMatch: 'full', component: UsuarioDosComponent},
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
