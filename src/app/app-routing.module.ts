import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { IndexComponent } from './index/index.component';
import { EquiposComponent } from './equipos/equipos.component';
import { LoginComponent } from './authentication/login/login.component';

//En esta parte se muestra las rutas para el url y el componente al que le llama 
const routes: Routes = [
 { path: '', component: IndexComponent }, // Te sirve para cuando el enlace esta en blanco nos manda directo al comoponente index
  {path: 'contacto', component: ContactoComponent},
  {path: 'index', component:  IndexComponent },
  {path:'index/contacto', component: ContactoComponent},
  {path:'equipo', component: EquiposComponent},
  {path:'equipo/contacto', component: ContactoComponent},
  {path:'login', component: LoginComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
