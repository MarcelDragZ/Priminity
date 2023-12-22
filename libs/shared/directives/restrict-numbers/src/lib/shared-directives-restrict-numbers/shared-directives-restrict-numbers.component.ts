import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[priminityRestrictNumbers]',
  standalone: true,
})
export class SharedDirectivesRestrictNumbersDirective {
  el: ElementRef = inject(ElementRef);

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
