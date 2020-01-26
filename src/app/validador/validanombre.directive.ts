import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator } from '@angular/forms';
import { PersonaService } from '../Service/persona.service';
import {map} from 'rxjs/operators';
@Directive({
  selector: '[nombreUnico]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: ValidanombreDirective, multi: true }]
})
export class ValidanombreDirective implements AsyncValidator {

  constructor(private http:PersonaService) 
  { }
  validate(control: import("@angular/forms").AbstractControl): Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors> {
    const nombre = <string>control.value;
    return this.http.verNombres().pipe(
    map(nombres=>{
      if (nombres.indexOf(nombre)!=-1)
      {
        return {nombreUnico: true};
      }
      return null;})

      );
        
  }
  
  

}
