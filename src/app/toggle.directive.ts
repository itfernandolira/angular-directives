import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }
    
    @Input() set appToggle(condition: boolean) {
      if (!condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else  {
        this.viewContainer.clear();
      }
    }

}
