import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator } from '@angular/forms';
import { PersonaService } from '../Service/persona.service';
import {map} from 'rxjs/operators';
@Directive({
  selector: '[nombreUnico]',
  providers: [{  provide: NG_ASYNC_VALIDATORS, useExisting: ValidanombreDirective, multi: true }]
})
export class ValidanombreDirective implements AsyncValidator {

  constructor(private service:PersonaService) { }
  validate(control: import("@angular/forms").AbstractControl): Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors> {
    throw new Error("Method not implemented.");
    const nombre = control.value;
    console.log(nombre);
    /*return this.service.getPersonas()
    .subscribe(personas =>{
        if (personas[0].nombre==nombre){
          return {nombreUnico: true};
        }
        return null;});*/
        
  }
  
  

}
