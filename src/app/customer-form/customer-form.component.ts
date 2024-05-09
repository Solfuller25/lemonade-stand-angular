import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PhoneFormControl } from './phone-form-control';

interface LemonadeStand {
  id: number,
  name: string
}

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  lemonadeStands: LemonadeStand[] = [
    {id: 1, name: 'Sol\'s Lemonade Stand'},
    {id: 2, name: 'Brad\'s Lemonade Stand'},
    {id: 3, name: 'Generic Lemonade Stand'}
  ]

  customerForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    phoneNumber: new PhoneFormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
    selectedStand: new FormControl<LemonadeStand | undefined>(undefined, [Validators.required]) // Can be either lemonade stand type or undefined type
  })

  onSubmit() {
    console.log(`Name: ${this.customerForm.controls['name'].value}`)
    console.log(`Phone: ${this.customerForm.controls['phoneNumber'].value}`)
    console.log(`Stand: ${this.customerForm.controls['selectedStand'].value}`)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
