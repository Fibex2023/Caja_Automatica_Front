import { Component } from '@angular/core';
import { HeaderComponent } from '@layouts/header/header.component';
import { VPOSUniversalApiService } from '@service/VPOSUniversal/request/vposuniversal-api.service';
import { Client } from '@class/client/client';
import { BuyProduct } from '@class/buyProduct/buy-product';
//import { ROUTES, RedirectCommand, RouterLink, RouterState } from '@angular/router';
//import { routes } from '@app.routes';

@Component({
  selector: 'app-card-pay',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './card-pay.component.html',
  styleUrl: './card-pay.component.css'
})
export class CardPayComponent {

  titleTDC = 'Pagar con Tarjeta.';

  constructor (private _service: VPOSUniversalApiService){}
  //private _service = new VPOSUniversalApiService;

  public _client = new Client();
  public _product = new BuyProduct();


  public _dataApi: any;
  public _ApiTest: any;

  public _testAPI(){this._service.statusOK(this._ApiTest);}
  public _closeAPI(){this._service.closeAPI();}


  public _requestCard(){
    var amount = this._product.getAmount().toLocaleString().replace('.',',')
    this._service.cardRequest(this._client.getCiNum(), amount);
  }

  public _requestCardDona(){
    this._service.cardRequest_donative(this._client.getCiNum(), this._product.getAmount(), this._product.getDonativeBuy())
  }

  public _requestCardCashR(){
    this._service.cardRequest_vTerminal(this._client.getCiNum(), this._product.getAmount(), this._product.getNumCashR())
  }

  public _requestCardDonaCashR(){
    this._service.cardRequest_donative(this._client.getCiNum(), this._product.getAmount(), this._product.getDonativeBuy())
  }

}
