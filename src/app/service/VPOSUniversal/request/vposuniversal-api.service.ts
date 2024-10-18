import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VPOSUniversalApiService {

  constructor() { }

  //#-----------------------------Conect to API and Test-----------------------------------#//
  closeAPI(){//Close Conecction to API
    axios.get(environment.API_URL+'/api/donwservice/'+environment.TokenAPILaravel)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  statusOK(_dataApi: any){//Test connection to API
    axios.get(environment.API_URL+'/api/pingpage/'+environment.TokenAPILaravel)
    .then(res => _dataApi = res).then(res => console.log(res))
    .catch(err => console.log(err));
    //this.closeAPI();
  }
  //#--------------------------------------------------------------------------------------#//

  //#--------------------------------Card pay Simple---------------------------------------#//
  cardRequest(_ci: string, _amount: string){ //Pay Card Simple

    return new Promise((resolve, reject)=>{
      try {

        if(_ci != null && _ci != '' && _amount ) {
          axios({
            method: 'get',
            url: environment.API_URL+'/api/metodo/request/cardpay/'+_ci+'/'+_amount+'/'+environment.TokenAPILaravel,
            /*data: {
              "accion":"tarjeta",
              "montoTransaccion": _amount,
              "cedula": _ci
            }*/
          }).then(res => {
              console.log(res);
              resolve(res)
            })
            .catch(err => {
              console.log(err);
              reject(err)
          });
        }else{
          reject(new Error('Validacion invalida, verifica los campos e intenta de nuevo.'));
        }

      } catch (error) {
        reject(error);
      }

    });

    //this.closeAPI();

  }
  //#---------------------------------------------------------------------------------------#//

  //#--------------------------------Card pay Donative--------------------------------------#//
  cardRequest_donative(_ci: string, _amount: string, _amountD: string){ //Pay Card with donative

    return new Promise((resolve, reject)=>{
      try {

        if(_ci != null && _ci != '' && _amount != null && _amount != '' && _amountD != null && _amount  != '') {
          axios({
            method: 'get',
            url: environment.API_URL+'/api/metodo/request/cardwithdonative/'+_ci+'/'+_amount+'/'+_amountD+'/'+environment.TokenAPILaravel,
            /*data: {
              "accion":"tarjeta",
              "montoTransaccion": _amount,
              "cedula": _ci,
              "montoDonativo": _amountD
            }*/
          }).then(res => {
              console.log(res);
              resolve(res)
            })
            .catch(err => {
              console.log(err);
              reject(err)
          });
        }else{
          reject(new Error('Validacion invalida, verifica los campos e intenta de nuevo.'));
        }

      } catch (error) {
        reject(error);
      }

    });

    //this.closeAPI();

  }
  //#-------------------------------------------------------------------------------------#//

  //#---------------------------Card pay VirtualTerminal----------------------------------#//
  cardRequest_vTerminal(_ci: string, _amount: string, _vTermial: string){ //Pay Card with donative VirtualTerminal

    return new Promise((resolve, reject)=>{
      try {

        if(_ci != null && _ci != '' && _amount != null && _amount != '' && _vTermial != null && _vTermial != '') {
          axios({
            method: 'post',
            url: environment.API_URL+'/api/metodo/request/cardwithvterminal/'+_ci+'/'+_amount+'/'+_vTermial+'/'+environment.TokenAPILaravel,
            /*data: {
              "accion":"tarjeta",
              "montoTransaccion": _amount,
              "cedula": _ci,
              "terminalVirtual": _vTermial,
              "montoDonativo": _amountD
            }*/
          }).then(res => {
              console.log(res);
              resolve(res)
            })
            .catch(err => {
              console.log(err);
              reject(err)
          });
        }else{
          reject(new Error('Validacion invalida, verifica los campos e intenta de nuevo.'));
        }

      } catch (error) {
        reject(error);
      }

    });

    //this.closeAPI();

  }
  //#-------------------------------------------------------------------------------------#//


  //#--------------------Card pay Donative and VirtualTerminal----------------------------#//
  cardRequest_Dnt_VTrml(_ci: string, _amount: number, _amountD: number, _vTermial: string){ //Pay Card with donative and VirtualTerminal

    return new Promise((resolve, reject)=>{
      try {

        if(_ci != null && _ci != '' && Number.isFinite(_amount) && Number.isFinite(_amountD)) {
          axios({
            method: 'post',
            url: environment.API_URL+'/metodo/request/cardwithdntvandvtermial/'+_ci+'/'+_amount+'/'+_vTermial+'/'+_amountD+'/'+environment.TokenAPILaravel,
            /*data: {
              "accion":"tarjeta",
              "montoTransaccion": _amount,
              "cedula": _ci,
              "terminalVirtual": _vTermial,
              "montoDonativo": _amountD
            }*/
          }).then(res => {
              console.log(res);
              resolve(res)
            })
            .catch(err => {
              console.log(err);
              reject(err)
          });
        }else{
          reject(new Error('Validacion invalida, verifica los campos e intenta de nuevo.'));
        }

      } catch (error) {
        reject(error);
      }

    });

    //this.closeAPI();

  }
  //#-------------------------------------------------------------------------------------#//

  //#---------------------------------Card pay Zelle--------------------------------------#//
  zelleRequest(_ci: string, _amount: number,  _refZelle: number){ //Pay Zelle

    return new Promise((resolve, reject)=>{
      try {

        if(_ci != null && _ci != '' && Number.isFinite(_amount) && Number.isInteger(_refZelle)) {
          axios({
            method: 'post',
            url: environment.API_URL+'/api/metodo/request/zelle/'+_ci+'/'+_amount+'/'+_refZelle+'/'+environment.TokenAPILaravel,
            /*data: {
              "accion":"tarjeta",
              "montoTransaccion": _amount,
              "cedula": _ci,
              "referencia": _refZelle,
            }*/
          }).then(res => {
              console.log(res);
              resolve(res)
            })
            .catch(err => {
              console.log(err);
              reject(err)
          });
        }else{
          reject(new Error('Validacion invalida, verifica los campos e intenta de nuevo.'));
        }

      } catch (error) {
        reject(error);
      }

    });

    //this.closeAPI();

  }
  //#-------------------------------------------------------------------------------------#//

  //#-----------------------------Pay From change option----------------------------------#//
  cambioRequest(_ci: string, _amount: number,  _typeCoin: string){ //Pay From change option

    return new Promise((resolve, reject)=>{
      try {

        if(_ci != null && _ci != '' && Number.isFinite(_amount) && _typeCoin != '') {
          axios({
            method: 'post',
            url: environment.API_URL+'/api/metodo/request/paymentchange/'+_ci+'/'+_amount+'/'+_typeCoin+'/'+environment.TokenAPILaravel,
            /*data: {
              "accion": "cambio",
              "montoTransaccion": _amount,
              "cedula": _ci,
              "tipoMoneda": _typeCoin //#Los valores admitidos son: VES (Bolívares), USD (Dólares), EUR (Euro)#//
            }*/
          }).then(res => {
              console.log(res);
              resolve(res)
            })
            .catch(err => {
              console.log(err);
              reject(err)
          });
        }else{
          reject(new Error('Validacion invalida, verifica los campos e intenta de nuevo.'));
        }

      } catch (error) {
        reject(error);
      }

    });

    //this.closeAPI();

  }
  //#-------------------------------------------------------------------------------------#//

  //#-------------------------------Open keyboard payment---------------------------------#//
  keyboardOpenRequest(_ci: string, _amount: number){ //Open keyboard payment

    return new Promise((resolve, reject)=>{
      try {

        if(_ci != null && _ci != '' && Number.isFinite(_amount)) {
          axios({
            method: 'post',
            url: environment.API_URL+'/vpos/metodo/'+environment.TokenAPILaravel,
            data: {
              "accion": "tecladoAbierto",
              "montoTransaccion": _amount,
              "cedula": _ci,
            }
          }).then(res => {
              console.log(res);
              resolve(res)
            })
            .catch(err => {
              console.log(err);
              reject(err)
          });
        }else{
          reject(new Error('Validacion invalida, verifica los campos e intenta de nuevo.'));
        }

      } catch (error) {
        reject(error);
      }

    });

    //this.closeAPI();

  }
  //#-------------------------------------------------------------------------------------#//

  /*/#-------------------------------Avance o Retiro de Efectivo con submenú---------------------------------#//
  avanceRetiroCashRequest(_ci: string, _amount: number, _retiroAvance: number){ //Open keyboard payment

    return new Promise((resolve, reject)=>{
      try {

        if(_ci != null && _ci != '' && Number.isFinite(_amount) && Number.isFinite(_retiroAvance)) {
          axios({
            method: 'post',
            url: environment.API_URL+'/vpos/metodo',
            data: {
              "accion": "avanceRetiro",
              "montoTransaccion": _amount,
              "montoAvanceRetiro": _retiroAvance,
              "cedula": _ci,
            }
          }).then(res => {
              console.log(res);
              resolve(res)
            })
            .catch(err => {
              console.log(err);
              reject(err)
          });
        }else{
          reject(new Error('Validacion invalida, verifica los campos e intenta de nuevo.'));
        }

      } catch (error) {
        reject(error);
      }

    });

    //this.closeAPI();

  }
  //#-------------------------------------------------------------------------------------#/*/
}
