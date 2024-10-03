import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { Client } from '../../class/client/client';
import { BuyProduct } from '../../class/buyProduct/buy-product';
import { FormControl, FormGroup } from '@angular/forms';
import { PayMethodComponent } from "../pay-method/pay-method.component";
import { CashPayComponent } from "../cash-pay/cash-pay.component";
import { MobilePaymentPayComponent } from "../mobile-payment-pay/mobile-payment-pay.component";
import { ZellePayComponent } from '../zelle-pay/zelle-pay.component';
import { CardPayComponent } from '../card-pay/card-pay.component';
import { FormBillComponent } from "../form-bill/form-bill.component";
import { CasheaPayComponent } from "../cashea-pay/cashea-pay.component";
import { AdministrativeViewComponent } from "../administrative-view/administrative-view.component";

@Component({
  selector: 'app-home-payments',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PayMethodComponent,
    CashPayComponent,
    MobilePaymentPayComponent,
    ZellePayComponent,
    CardPayComponent,
    FormBillComponent,
    CasheaPayComponent,
    AdministrativeViewComponent
],
  templateUrl: './home-payments.component.html',
  styleUrl: './home-payments.component.css'
})
export class HomePaymentsComponent {

  public pageNum: number = 0;
  public dataCl = new Client();
  public productBuy = new BuyProduct();

  /*public payCardForm = new FormGroup({
    _nameCl: new FormControl<string>(''),
    _ciNum: new FormControl<number>(0),
    _amount: new FormControl<number>(0)
  })*/

  public nameNumber(namePage_:string){

    switch(namePage_){

      case('formbill'):
        this.pageNum = -1;
        break;

      case('paymethod'):
        this.pageNum = 0;
        break;

      case('cardpay'):
        this.pageNum = 1;
        break;

      case('cashpay'):
        this.pageNum = 2;
        break;

      case('zellepay'):
        this.pageNum = 3;
        break;

      case('mobilepayment'):
        this.pageNum = 4;
        break;

      case('casheapay'):
        this.pageNum = 5;
        break;

      case('printandothers'):
        this.pageNum = 6;
        break;

      default:
        throw new Error('Pagina invalida.');

    }

  }

}
