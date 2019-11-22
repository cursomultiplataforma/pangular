import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {OneComponent} from './secciones/cargarcomponentes/one/one.component';
import {TwoComponent} from './secciones/cargarcomponentes/two/two.component';
import {DirectivaifComponent} from './secciones/directivas/directivaif/directivaif.component';
import {DirectivaforComponent} from './secciones/directivas/directivafor/directivafor.component';
import {DirectivaswitchComponent} from './secciones/directivas/directivaswitch/directivaswitch.component';
import {DirectivamodelComponent} from './secciones/directivas/directivamodel/directivamodel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PadreComponent} from './secciones/comunicacion/padre/padre.component';
import {HijoComponent} from './secciones/comunicacion/hijo/hijo.component';
import {ObserverComponent} from './secciones/observer/observer.component';
import {ErrorComponent} from './secciones/error/error.component';
import {Ej2Component} from './secciones/observer/ej2/ej2.component';
import {Ej3Component} from './secciones/observer/ej3/ej3.component';
import {CommentsComponent} from './apicloud/comments/comments.component';
import {PostsComponent} from './apicloud/posts/posts.component';
import {UsersComponent} from './apicloud/users/users.component';
import {ApicloudService} from './apicloud/services/apicloud.service';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {CustomSnackBarComponent} from './apicloud/templates/snackbarok/custom.snabkbar.ok.component';
import {Padre2Component} from './secciones/comunicacion/ej2/padre2/padre2.component';
import {Hijo2Component} from './secciones/comunicacion/ej2/hijo2/hijo2.component';
import {PipesComponent} from './secciones/pipes/pipes.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {AuthComponent} from './apicloud/auth/auth.component';
import {ModalpostComponent} from './apicloud/templates/modalpost/modalpost.component';
import {MiperfilComponent} from './apicloud/miperfil/miperfil.component';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import { CrearUsuarioComponent } from './apizend/crear-usuario/crear-usuario.component';
import { GestionarUsuarioComponent } from './apizend/gestionar-usuario/gestionar-usuario.component';
import { CrearUsuarioBbddComponent } from './apizend/crear-usuario-bbdd/crear-usuario-bbdd.component';
import { GestionarUsuarioBbddComponent } from './apizend/gestionar-usuario-bbdd/gestionar-usuario-bbdd.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule, } from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    // EJERCICIOS
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
    Ej3Component,
    // API CLOUD
    CommentsComponent,
    PostsComponent,
    UsersComponent,
    CustomSnackBarComponent,
    Padre2Component,
    Hijo2Component,
    PipesComponent,
    AuthComponent,
    ModalpostComponent,
    MiperfilComponent,
    CrearUsuarioComponent,
    GestionarUsuarioComponent,
    CrearUsuarioBbddComponent,
    GestionarUsuarioBbddComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatCardModule,
    MatBadgeModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatTabsModule
  ],
  entryComponents: [
    CustomSnackBarComponent,
    ModalpostComponent
  ],
  providers: [ApicloudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
