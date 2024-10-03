import { Component } from '@angular/core';
import { BuyProduct } from '@class/buyProduct/buy-product';
import { Cashea } from '@class/cashea/cashea';
import { Client } from '@class/client/client';
import { HeaderComponent } from '@layouts/header/header.component';
import { CasheavposuniversalService } from '@service/VPOSUniversal/request/cashea/casheavposuniversal.service';
//import { VPOSUniversalApiService } from '@service/VPOSUniversal/request/vposuniversal-api.service';

@Component({
  selector: 'app-cashea-pay',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './cashea-pay.component.html',
  styleUrl: './cashea-pay.component.css'
})
export class CasheaPayComponent {

  titleCashea = 'Pagar utilizando Cashea';

  constructor (private _service: CasheavposuniversalService){}

  public _client = new Client();
  public _product = new BuyProduct();
  public _casheaData = new Cashea();


  public _dataApi: any;
  public _ApiTest: any;

  public _testAPI(){this._service.statusOK(this._ApiTest);}
  public _closeAPI(){this._service.closeAPI();}

  public casheaR(){
    this._service.casheaRequest(this._client.getCiNum(), this._product.getAmount())
  }

  public casheaRvT(){
    this._service.casheaVtrmnlRequest(this._client.getCiNum(), this._product.getAmount(), this._product.getNumCashR())
  }

  public casheaRConfirm(){
    this._service.casheaConfirm(this._casheaData.getIdOrder(), this._product.getAmount())
  }

  public casheaConfirmvT(){
    this._service.casheaVtrmnlConfirm(this._casheaData.getIdOrder(), this._product.getAmount(), this._product.getNumCashR())
  }

  public _casheaCancel(){
    this._service.casheaCancel(this._casheaData.getNumSeq())
  }

  public _casheaCancelvT(){
    this._service.casheaVtrmnlCancel(this._casheaData.getNumSeq(), this._product.getNumCashR())
  }

}
