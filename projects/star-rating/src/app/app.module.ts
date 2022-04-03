import {ApplicationRef, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StarRatingComponent} from './star-rating/star-rating.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    StarRatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [StarRatingComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    const customElement = createCustomElement(StarRatingComponent, {injector: this.injector});
    customElements.define('star-rating', customElement);
  }
}
