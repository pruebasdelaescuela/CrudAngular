import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './Persona/listado/listado.component';
import { AgregarComponent } from './Persona/agregar/agregar.component';
import { ModificarComponent } from './Persona/modificar/modificar.component';
import {PersonaService} from './Service/persona.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ValidanombreDirective } from './validador/validanombre.directive';
import { PrimeraMayusculaDirective } from './validador/primera-mayuscula.directive';
@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    AgregarComponent,
    ModificarComponent,
    ValidanombreDirective,
    PrimeraMayusculaDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
