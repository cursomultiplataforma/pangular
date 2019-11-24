import {Component, OnInit} from '@angular/core';
import {Usuario} from '../Models/usuario.model';
import {Observable, Subscription} from 'rxjs';
import {UsuariosService} from '../services/usuarios.service';

@Component({
  selector: 'app-gestionar-usuario',
  templateUrl: './gestionar-usuario.component.html',
  styleUrls: ['./gestionar-usuario.component.css']
})
export class GestionarUsuarioComponent implements OnInit {

  private usuarios: Usuario[];
  private usuarios$: Observable<Usuario[]>;
  private usuariosSuscripcion: Subscription;
  private edito = false;
  private crear = false;
  private usuario: Usuario;

  constructor(private usuariosService: UsuariosService,) { }

  ngOnInit() {
    /*
    Se ejecuta cada vez que se carga el componente
    Guardo en este componente el array de usuarios
    Genero el observer y me suscribo a él, de esta forma recibo todos los cambios
     */
    this.usuarios = this.usuariosService.getUsuarios();
    this.usuarios$ = this.usuariosService.getUsuarios$();
    this.usuariosSuscripcion = this.usuarios$.subscribe(usuarios => this.usuarios = usuarios);
  }

  /* Borrar: sólo necesitamos pasar la clave, que será el login */
  borrar(login): void {
    this.usuario = new Usuario(login, null,null,null,0);
    this.usuariosService.borrar(this.usuario);
  }

  /* Edición: ejemplo con dos funciones:
  - Editar --> activa el div que permite la edición
  - Actualizar --> da la orden de guardar
  Nota: dos comportamientos, en función de si referenciamos al mismo objeto o creamos uno nuevo
   */
  editar(login): void {
    this.edito = true;
    this.usuarios.forEach((item, index, dat) => {
      if (item.login === login) {
        /*
        Mismo objeto --> se auto "graba"
        - Al ser una copia del mismo objeto, el observer va actualizando los valores automáticamente
        - No permitiría "cambiar de idea"
        - No sería necesasrio "grabar nada", con ocultar la ventana de edición nos valdría
         */
        //this.usuario = item;

        /*
        Otro objeto con los mismos valores
        - Es otro objeto, luego tendremos que guardar los cambios
        - En general es un comportamiento más lógico
         */
        this.usuario = new Usuario(item.login, item.nombre, item.apellido1, item.apellido2, item.edad);
      }
    });
  }

  actualizar(login): void{
    this.usuariosService.modificarUsuario(this.usuario);
    // Si es el mismo objeto con edito = false nos vale para que se oculte el div y listo
    this.edito = false;
  }

  /* Añadir: ejemplo con una única función y un acción que nos dice qué hacer
  - Si acción nos dice "grabar" damos la orden de agregar el usuario
  - Si acción nos dice otra cosa, mostrarmos el div de añadir usuarios
   */
  nuevo (accion): void {
    if (accion == 'grabar') {
      this.usuariosService.agregaUsuario(this.usuario); // Grabo el usuario
      this.crear = false;
    } else {
      this.crear = true;
    }
    // Siempre limpiamos el this.usuario para que la siguiente acción no lleve información errónea
    this.usuario = this.usuariosService.nuevoUsuario();
  }

  /*
    Realmente no es necesario un "destructor" porque Angular gestiona muy bien la liberación de recursos
    Solamente será interesante si queremos hacer algo diferente al estándar
    */
  ngOnDestroy() {
   this.usuariosSuscripcion.unsubscribe();
  }
}
