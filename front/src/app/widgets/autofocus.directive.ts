import { Directive, ElementRef, afterNextRender } from '@angular/core';

@Directive({
  selector: 'input[appAutofocus],textarea[appAutofocus]',
  standalone: true,
})
export class AutofocusDirective {
  constructor(
    private readonly elt: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  ) {
    console.log('elt: ', elt.nativeElement);
    console.log('instantiate directive autofocus');
    afterNextRender(() => {
      this.elt.nativeElement.select();
    });
  }
}
