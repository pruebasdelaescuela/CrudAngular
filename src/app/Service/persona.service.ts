import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  path:string;
  constructor(private http:HttpClient) {
    this.path='http://localhost:8080/personas'
   }
  
   getPersonas()
   {
     return this.http.get<Persona[]>(this.path);
   }
   createPersona(persona:Persona)
   {
     return this.http.post<Persona>(this.path,persona);
   }
   getPersonaUnica(id:number)
   {
     return this.http.get<Persona>(this.path+"/"+id);
   }
   updatePersona(persona:Persona)
   {
     return this.http.put<Persona>(this.path+"/"+persona.id,persona);
   }
   deletePersona(persona:Persona)
   {
    console.log("llega al servicio");
   return this.http.delete<Persona>(this.path+"/"+persona.id);
   }
}
