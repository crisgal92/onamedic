import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { IndexComponent } from './index/index.component';
import { EquiposComponent } from './equipos/equipos.component';
import { LoginComponent } from './authentication/login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', // Habilita el desplazamiento a anclas
  scrollPositionRestoration: 'enabled' // Opcional: Mantiene la posición al volver
};

//En esta parte se muestra las rutas para el url y el componente al que le llama 
const routes: Routes = [
 { path: '', component: IndexComponent }, // Te sirve para cuando el enlace esta en blanco nos manda directo al comoponente index
  {path: 'contacto', component: ContactoComponent},
  {path: 'index', component:  IndexComponent },
  {path:'index/contacto', component: ContactoComponent},
  {path:'equipo', component: EquiposComponent},
  {path:'equipo/contacto', component: ContactoComponent},
  {path:'login', component: LoginComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'servicios/contacto', component: ContactoComponent},
  {path:'nosotros', component: NosotrosComponent},
  {path:'nosotros/contacto', component: ContactoComponent},
  {path:'login/listado', component: ClienteListComponent},
  {path:'listado', component: ClienteListComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
