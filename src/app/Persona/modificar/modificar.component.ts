import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Service/persona.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
persona:Persona=new Persona();
  constructor(private router:Router,private http:PersonaService) { }

  ngOnInit() {
    this.Editar();
  }
  Editar(){
   
  let id=localStorage.getItem("id");
  this.http.getPersonaUnica(+id)
  .subscribe(datos=>{this.persona=datos;})
  }
  Actualizar(persona:Persona)
  {
    this.http.updatePersona(persona)
    .subscribe(datos=>{
      this.persona=datos;
      this.router.navigate(["listado"]);
    })
  }
}
