import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[PrimeraMayuscula]',
  providers: [{provide: NG_VALIDATORS, useExisting: PrimeraMayusculaDirective, multi: true}]
})
export class PrimeraMayusculaDirective implements Validator{
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    const nombre = <string>control.value;
    if (!nombre) {
      return;
    }
    if (nombre.charAt(0)== nombre.charAt(0).toLowerCase()){
      return {'PrimeraMayuscula': {'message': 'Debe comenzar en mayuscula'}};
    }
    return null;

  }
  
  constructor() { }

}
