import { Directive, Input} from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators}   from '@angular/forms';


@Directive({
  selector: '[appFloorNotExist]',
  providers: [{provide: NG_VALIDATORS, useExisting: FloorNotExistDirective, multi: true}]
})
export class FloorNotExistDirective implements Validator {
@Input('appFloorNotExist') floorNotExist: boolean;
@Input('floorsNumber') floorsNumber: number;
  validate(control: AbstractControl): {[key: number]: any} {
  	return (control.value > floorsNumber.value ) ? {'floorNotExist': true } : null;
  }
}






