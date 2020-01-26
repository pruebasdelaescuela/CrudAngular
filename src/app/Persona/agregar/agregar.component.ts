import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Service/persona.service';
import { Persona } from 'src/app/Modelo/Persona';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  persona:Persona;
  constructor(private router:Router, private http:PersonaService) {
    this.persona = new Persona();
   }

  ngOnInit() {
  }
  Guardar(){
   
    this.http.createPersona(this.persona)
    .subscribe(datos=>{
      this.router.navigate(["listado"]);
    })
  }

}
