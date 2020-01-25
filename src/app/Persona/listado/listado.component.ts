import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Service/persona.service';
import { Router } from '@angular/router';
import {Persona} from 'src/app/Modelo/Persona';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
personas:Persona[];

  constructor(private http:PersonaService,private router:Router) { }

  ngOnInit() {
    this.http.getPersonas()
    .subscribe(datos=>{this.personas=datos;
    })
  }
Editar(persona:Persona):void{
  localStorage.setItem("id",persona.id.toString());
  this.router.navigate(["modificar"]);
}
Eliminar(persona:Persona)
{
  this.http.deletePersona(persona)
  .subscribe(datos=>{
    this.personas=this.personas.filter(p=>p!=persona);
    alert("eliminado");
    this.router.navigate(["listado"]);
    })
}

}
