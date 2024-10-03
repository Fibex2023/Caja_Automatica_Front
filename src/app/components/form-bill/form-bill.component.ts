import { Component, EventEmitter, Output } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { HeaderComponent } from '../../layouts/header/header.component';
//import { Client } from '../../class/client/client';
//import { BuyProduct } from '../../class/buyProduct/buy-product';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-bill',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './form-bill.component.html',
  styleUrl: './form-bill.component.css'
})
export class FormBillComponent {

  @Output() formData: EventEmitter<any> = new EventEmitter;

  //public dataCl = new Client();
  //public productBuy = new BuyProduct();

  public payCardForm = new FormGroup({
    nameCl_: new FormControl<string>(''),
    ciNum_: new FormControl<number>(0),
    amount_: new FormControl<number>(0),
    listProduct_: new FormControl<Array<any>>([])
  });

  public addItem(){

    const arr = [];

    arr.push({ productName: "",price: 0 })

    this.payCardForm.setValue({
      listProduct_: ([arr]),
      nameCl_: null,
      ciNum_: null,
      amount_: null
    })

  }

}
