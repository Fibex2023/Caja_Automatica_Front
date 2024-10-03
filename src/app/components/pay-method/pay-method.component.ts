import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { Client } from '../../class/client/client';
import { BuyProduct } from '../../class/buyProduct/buy-product';

@Component({
  selector: 'app-pay-method',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './pay-method.component.html',
  styleUrl: './pay-method.component.css'
})
export class PayMethodComponent {

  @Output() namePage: EventEmitter<string> = new EventEmitter;

  title = 'Seleciona un metodo de pago';

  public _client = new Client();
  public _product = new BuyProduct();

  public _selectView(_namePage: string){

    this.namePage.emit(_namePage);

  }

}
