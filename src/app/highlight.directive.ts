import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input() defaultColor: string = "transparent" ;
  @Input() highlightColor: string = "blue";

  //Renderer alternative if we just want to change some style property
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.elementRef.nativeElement.style.backgroundColor = "green";
    //Better approach
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }



}
