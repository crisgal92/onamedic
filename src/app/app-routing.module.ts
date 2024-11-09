import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
 { path: '', component: IndexComponent },
  {path: 'contacto', component: ContactoComponent},
  {path: 'index', component:  IndexComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
