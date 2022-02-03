import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[click-class]'
})
export class ClickClassDirective {

  constructor(public elementRef:ElementRef) { }
  @Input('click-class') clickClass:any;  

  @HostListener('click') onMouseEnter() {
    this.elementRef.nativeElement.classList.toggle(this.clickClass);
 }
}
