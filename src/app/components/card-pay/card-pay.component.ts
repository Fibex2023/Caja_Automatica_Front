import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '@layouts/header/header.component';
import { VPOSUniversalApiService } from '@service/VPOSUniversal/request/vposuniversal-api.service';
import { Client } from '@class/client/client';
import { BuyProduct } from '@class/buyProduct/buy-product';
// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
import { PrintVoucherService } from '@service/print-escpos/print-voucher.service';


@Component({
  selector: 'app-card-pay',
  standalone: true,
  imports: [],
  templateUrl: './card-pay.component.html',
  styleUrl: './card-pay.component.css'
})
export class CardPayComponent {


  titleTDC = 'Pagar con Tarjeta.';

  constructor (
    private _service: VPOSUniversalApiService,
    private _printer: PrintVoucherService,
  ){}

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  //private _service = new VPOSUniversalApiService;

  public _client = new Client();
  public _product = new BuyProduct();
  public _data: any;


  public _dataApi: any;
  public _ApiTest: any;

  public _testAPI(){this._service.statusOK(this._ApiTest);}
  public _closeAPI(){this._service.closeAPI();}

  async _requestCard(): Promise<any>{
    var amount = this._product.getAmount().toLocaleString().replace('.',',');
    try {
      this._data = await this._service.cardRequest(this._client.getCiNum(), amount);

      const _dataClient = [{
        'date': '2024-10-17',
        'refundNumber': this._data.data.numeroReferencia, // Convertir a string
        'nameClient': 'Miguel',
        'ciClient': this._data.data.cedula,
        'abonumber': 'V1242',
        'describe': 'MENS OCT 2024',
        'amount': this._data.data.montoTransaccion,
        'methodPayment': this._data.data.tipoProducto,
        'totalAmount': this._data.data.montoTransaccion+'Bs.',
        'saldo': '1120.52Bs.',
        'status': this._data.data.mensajeRespuesta,
      }];

      console.log('My data: '+this._data.data.nombreVoucher);
      console.log('Ref number: '+this._data.data.numeroReferencia);
      console.log('Answer Message: '+this._data.data.mensajeRespuesta);
      console.log('Product type: '+this._data.data.tipoProducto);
      console.log('Number autoritation: '+this._data.data.numeroAutorizacion);
      console.log('Number card: '+this._data.data.numeroTarjeta);
      console.log('Amount: '+this._data.data.montoTransaccion);
      console.log('CI: '+this._data.data.cedula);

      this.generarPDF(_dataClient);

      return this._data;

    } catch (error) {
      console.error('Error al obtener los datos:', error);
      throw error;
    }

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

  generarPDF(_dataClient: any) {

    this._printer.printTitek(_dataClient);

  }

}
