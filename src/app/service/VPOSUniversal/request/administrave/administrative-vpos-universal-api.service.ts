import { Injectable } from '@angular/core';
//import { VPOSUniversalApiService } from './vposuniversal-api.service';
import axios from 'axios';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministrativeVposUniversalApiService {

  constructor() { }

//#------------------------------Print the Last Voucher-------------------------------------#//
printLastVoucher(){ //Print the Last Voucher

  return new Promise((resolve, reject)=>{
    try {
      axios({
        method: 'post',
        url: environment.API_URL+'/api/adminstrative/print/lastvaouvher/'+environment.TokenAPILaravel,
        /*data: {
          "accion":"imprimeUltimoVoucher"
        }*/
      }).then(res => {
          console.log(res);
          resolve(res)
        })
        .catch(err => {
          console.log(err);
          reject(err)
      });

    } catch (error) {
      reject(error);
    }

  });

  //this.closeAPI();

}
//#-----------------------------------------------------------------------------------------#//

//#-------------------------Print the last processed voucher--------------------------------#//
printLastVoucherP(){ //Print the last processed voucher

  return new Promise((resolve, reject)=>{
    try {
      axios({
        method: 'post',
        url: environment.API_URL+'/api/adminstrative/print/lastvaouvher/processed/'+environment.TokenAPILaravel,
        /*data: {
          "accion":"imprimeUltimoVoucherP"
        }*/
      }).then(res => {
          console.log(res);
          resolve(res)
        })
        .catch(err => {
          console.log(err);
          reject(err)
      });

    } catch (error) {
      reject(error);
    }

  });

  //this.closeAPI();

}
//#-----------------------------------------------------------------------------------------#//

//#---------------------------Pre-closing of cash register----------------------------------#//
pre_closeCashRegister(){ //Pre-closing of cash register

  return new Promise((resolve, reject)=>{
    try {
      axios({
        method: 'post',
        url: environment.API_URL+'/api/administrative/closingbox/pre-closing/'+environment.TokenAPILaravel,
        /*data: {
          "accion":"precierre"
        }*/
      }).then(res => {
          console.log(res);
          resolve(res)
        })
        .catch(err => {
          console.log(err);
          reject(err)
      });

    } catch (error) {
      reject(error);
    }

  });

  //this.closeAPI();

}
//#-----------------------------------------------------------------------------------------#//

//#-------------------------------Closing of cash register----------------------------------#//
closeCashRegister(){ //Closing of cash register

  return new Promise((resolve, reject)=>{
    try {
      axios({
        method: 'post',
        url: environment.API_URL+'/api/administrative/closingbox/'+environment.TokenAPILaravel,
        /*data: {
          "accion":"precierre"
        }*/
      }).then(res => {
          console.log(res);
          resolve(res)
        })
        .catch(err => {
          console.log(err);
          reject(err)
      });

    } catch (error) {
      reject(error);
    }

  });

  //this.closeAPI();

}
//#-----------------------------------------------------------------------------------------#//

//#-----------------------Reprint of the last Closing Voucher-------------------------------#//
re_printLastCloseVoucher(){ //Reprint of the last Closing Voucher

  return new Promise((resolve, reject)=>{
    try {
      axios({
        method: 'post',
        url: environment.API_URL+'/api/administrative/closingbox/re-print/lastvaucherclosing/'+environment.TokenAPILaravel,
        /*data: {
          "accion":"UltimoCierre"
        }*/
      }).then(res => {
          console.log(res);
          resolve(res)
        })
        .catch(err => {
          console.log(err);
          reject(err)
      });

    } catch (error) {
      reject(error);
    }

  });

  //this.closeAPI();

}
//#-----------------------------------------------------------------------------------------#//


}
