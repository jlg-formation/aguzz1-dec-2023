import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { sleep } from '../misc';

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

  static blackList: AsyncValidatorFn = async (
    control: AbstractControl
  ): Promise<ValidationErrors | null> => {
    console.log('check blacklist on ', control.value);
    await sleep(2000);
    const blackList = ['aaa', 'bbb'];
    if (blackList.includes(control.value)) {
      return { blacklist: { message: `le mot ${control.value} est interdit` } };
    }
    return null;
  };
}
