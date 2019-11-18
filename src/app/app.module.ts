import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {OneComponent} from './secciones/one/one.component';
import {TwoComponent} from './secciones/two/two.component';
import {DirectivaifComponent} from './secciones/directivaif/directivaif.component';
import {DirectivaforComponent} from './secciones/directivafor/directivafor.component';
import {DirectivaswitchComponent} from './secciones/directivaswitch/directivaswitch.component';
import {DirectivamodelComponent} from './secciones/directivamodel/directivamodel.component';
import {FormsModule} from '@angular/forms';
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
import { Padre2Component } from './secciones/comunicacion/ej2/padre2/padre2.component';
import { Hijo2Component } from './secciones/comunicacion/ej2/hijo2/hijo2.component';
import { PipesComponent } from './secciones/pipes/pipes.component';

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
    PipesComponent
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
    MatIconModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    CustomSnackBarComponent
  ],
  providers: [ApicloudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
