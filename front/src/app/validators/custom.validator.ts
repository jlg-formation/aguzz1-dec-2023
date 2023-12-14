import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static integer: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    if (
      typeof control.value !== 'number' ||
      control.value !== Math.floor(control.value)
    ) {
      return {
        integer: { message: 'Must be an integer' },
      };
    }
    return null;
  };
}
