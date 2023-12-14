import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable, delay, map, of, tap } from 'rxjs';

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

  static blackList: AsyncValidatorFn = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    return of(undefined).pipe(
      delay(1000), // debounce of 1s
      tap(() => {
        console.log('check blacklist on ', control.value);
      }),
      delay(2000), // operation lourde fictive
      map(() => {
        const blackList = ['aaa', 'bbb'];
        if (blackList.includes(control.value)) {
          return {
            blacklist: { message: `le mot ${control.value} est interdit` },
          };
        }
        return null;
      })
    );
  };
}
