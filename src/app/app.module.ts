import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ToggleDirective } from './toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ToggleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
