import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.elementRef.nativeElement.style.backgroundColor = "green";
    //Better approach
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
  }



}
