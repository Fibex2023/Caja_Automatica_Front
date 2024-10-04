import { Component } from '@angular/core';
import { HeaderComponent } from '@layouts/header/header.component';
import { VPOSUniversalApiService } from '@service/VPOSUniversal/request/vposuniversal-api.service';
import { Client } from '@class/client/client';
import { BuyProduct } from '@class/buyProduct/buy-product';

@Component({
  selector: 'app-mobile-payment-pay',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './mobile-payment-pay.component.html',
  styleUrl: './mobile-payment-pay.component.css'
})
export class MobilePaymentPayComponent {

  titleMP = 'Pagar por Pago Movil.';

  constructor (private _service: VPOSUniversalApiService){}

  //private _service = new VPOSUniversalApiService;

  public _client = new Client();
  public _product = new BuyProduct();


  public _dataApi: any;
  public _ApiTest: any;

  public _payMobileRequest(){
    this._service.cambioRequest(this._client.getCiNum(), this._product.getAmount(), this._product.getTypeCoin())
  }

}
