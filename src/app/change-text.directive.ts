
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {
  
  @Input('dynamicColor') dynamicColor: string='red';  
  @Input() defaultValue: string='blue'; 
  constructor(private elRef: ElementRef) {

   }


   @HostListener('mouseover') onMouseOver() {  
    this.changeBackgroundColor(this.dynamicColor || this.defaultValue);
    this.changeTextColor('white');
    this.changeFont('Verdana');
  
  }  
  @HostListener('mouseleave') onMouseLeave() {  
    this.changeBackgroundColor('white');  
    this.changeTextColor('green');
    this.changeFont('Georgia');
  }  
  private changeBackgroundColor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;  
  }
private changeTextColor(color:string){
  this.elRef.nativeElement.style.color=color;
}
private changeFont(font:string){
  this.elRef.nativeElement.style.fontFamily=font;
}

}

