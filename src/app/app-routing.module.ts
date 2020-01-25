import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './Persona/listado/listado.component';
import { AgregarComponent } from './Persona/agregar/agregar.component';
import { ModificarComponent } from './Persona/modificar/modificar.component';


const routes: Routes = [{
  path:'listado',component:ListadoComponent
},{
  path:'alta',component:AgregarComponent
},{path:'modificar',component:ModificarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
