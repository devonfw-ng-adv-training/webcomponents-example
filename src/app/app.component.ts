import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'webcomponents-example';

  disabled: boolean = false;
  eventFromElement?: CustomEvent;
  valueSet: number = 0;

  notifyValueChanged(event: Event) {
    this.eventFromElement = event as CustomEvent;
  }

  enable() {
    this.disabled = false;
  }

  disable() {
    this.disabled = true;
  }

  setValue(newValue: number) {
    this.valueSet = newValue;
  }

  typeof(value: any) {
    return typeof value;
  }

  toJSON(value: any) {
    return JSON.stringify(value);
  }
}
