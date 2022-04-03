import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

export interface TestInterface {
  value: number;
  text: string;
}

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnChanges {
  rating = Array(5).fill(false);
  hoverIndex = -1;

  // CE-NOTE: even though we declare the types and angular recognizes them
  // a basic javascript application (or mostly any other framework) will convert booleans and numbers to strings!
  @Input()
  value: number = 0;

  @Input()
  disabled: boolean = false;

  @Output()
  valueChanged = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      console.log('Type of value is: ' + typeof this.value);
      this.rate(this.value);
    }
    if (changes['disabled']) {
      console.log('Type of disabled is: ' + typeof this.disabled);
      if (typeof this.disabled === 'string') {
        this.disabled = (this.disabled === 'true');
      }
    }
  }

  rate(rating: number): void {
    if (!this.disabled) {
      this.updateRating(rating);
      this.valueChanged.emit(rating);
    }
  }

  private updateRating(rating: number): void {
    this.rating.fill(false);
    if (rating) {
      this.rating.fill(true, 0, rating);
    }
  }
}
