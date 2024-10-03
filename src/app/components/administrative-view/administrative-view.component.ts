import { Component } from '@angular/core';
import { AdministrativeVposUniversalApiService } from '@service/VPOSUniversal/request/administrave/administrative-vpos-universal-api.service';

@Component({
  selector: 'app-administrative-view',
  standalone: true,
  imports: [],
  templateUrl: './administrative-view.component.html',
  styleUrl: './administrative-view.component.css'
})
export class AdministrativeViewComponent {

  titleAdmin = 'Administración de pagos';

  constructor (private _service: AdministrativeVposUniversalApiService){}

  public _dataApi: any;

  public lastVchPrnt(){
    return new Promise( (resolve, reject) => {
      this._service.printLastVoucher().then((res: any) => {
              // console.log(res);
              //this._dataApi = res;
              resolve(res);
          }).catch((err: any) => reject(err));
    });
  }

  public lastVchPrntPrccss(){
    this._service.printLastVoucherP();
  }

  public preCloseCR(){
    this._service.pre_closeCashRegister();
  }

  public closeCR(){
    this._service.closeCashRegister();
  }

  public rePrntLastCloseCR(){
    this._service.re_printLastCloseVoucher();
  }

}
