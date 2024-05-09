import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() lemonade: any;

  // When a remove lemonade event occurs we want to pass ID data up to that parent
  @Output() passLemonadeEvent = new EventEmitter<number>();

  passLemonadeId(removedLemonadeId: number) {
    this.passLemonadeEvent.emit(removedLemonadeId);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
