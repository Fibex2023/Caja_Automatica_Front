import { Component } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';
import { VPOSUniversalApiService } from '../../service/VPOSUniversal/request/vposuniversal-api.service';
import { Client } from '../../class/client/client';
import { BuyProduct } from '../../class/buyProduct/buy-product';

@Component({
  selector: 'app-zelle-pay',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './zelle-pay.component.html',
  styleUrl: './zelle-pay.component.css'
})
export class ZellePayComponent {

  titleZll = 'Pagar por Zelle.';

  constructor (private _service: VPOSUniversalApiService){}

  //private _service = new VPOSUniversalApiService;

  public _client = new Client();
  public _product = new BuyProduct();


  public _dataApi: any;
  public _ApiTest: any;

  public _testAPI(){this._service.statusOK(this._ApiTest);}
  public _closeAPI(){this._service.closeAPI();}


  public _zelleRequest(){
    this._service.zelleRequest(this._client.getCiNum(), this._product.getAmount(), this._client.getRefZelle());
  }

}
