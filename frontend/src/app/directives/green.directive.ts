import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective {

  constructor( private element: ElementRef) { element.nativeElement.style.color = '#00db87' }

}
