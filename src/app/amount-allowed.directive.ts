import { Directive, Input} from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators}   from '@angular/forms';

@Directive({
  selector: '[appAmountAllowed]',
  providers: [{provide: NG_VALIDATORS, useExisting: AmountAllowedDirective, multi: true}]
})
export class AmountAllowedDirective implements Validator {

	@Input('appAmountAllowed') amountAllowed: number;
	validate(control: AbstractControl): {[key: number]: any} {
		return (control.value < 2 ) ? {'amountAllowed': true } : null;
	}
}

