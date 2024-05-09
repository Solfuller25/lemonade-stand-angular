import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Lemonade {
  id: number;
  lemonJuice: number;
  sugar: number;
  iceCubes: number;
  price: number;
}

interface LemonadeStand {
  id: number,
  name: string
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  lemonadeStands: LemonadeStand[] = [
    {id: 1, name: 'Sol\'s Lemonade Stand'},
    {id: 2, name: 'Brad\'s Lemonade Stand'},
    {id: 3, name: 'Generic Lemonade Stand'}
  ]

  customerForm: FormGroup = new FormGroup({
    selectedStand: new FormControl<LemonadeStand | undefined>(undefined, [Validators.required]) // Can be either lemonade stand type or undefined type
  })

  onSubmit() {
    console.log(`Stand: ${this.customerForm.controls['selectedStand'].value}`)
  }

  @Input() lemonades: Lemonade[] = [];

  @Output() secondPassLemonadeIdEvent = new EventEmitter<number>();

  totalPrice: number = 0;

  receiveLemonadeId(removedLemonadeId: number) {
    this.secondPassLemonadeIdEvent.emit(removedLemonadeId);
  }

  constructor() { }

  ngOnInit(): void {
    this.lemonades.forEach(
      lemonade => this.totalPrice = this.totalPrice + lemonade.price);
  
    this.customerForm.setValue({ 
      selectedStand: this.lemonadeStands[0]
    });  
  }

}
