import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // CE-NOTE: When using custom elements, the CUSTOM_ELEMENTS_SCHEMA has to be defined
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
