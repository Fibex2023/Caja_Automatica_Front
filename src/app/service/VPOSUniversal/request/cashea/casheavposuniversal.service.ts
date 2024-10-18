import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CasheavposuniversalService {

  constructor() { }

  //#----------------------------Cashea requests proccess----------------------------------#//
  casheaRequest(_ci: string, _amount: string){ //Pay Cashea Request

    return new Promise((resolve, reject)=>{
      try {

        if(_ci != null && _ci != '' && _amount != null && _amount != '') {
          axios({
            method: 'post',
            url: environment.API_URL+'/api/cashea/create/request/'+_ci+'/'+_amount+'/'+environment.TokenAPILaravel,
            /*data: {
              "accion":"creacionCashea",
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

  //#----------------------------Cashea requests proccess----------------------------------#//
  casheaVtrmnlRequest(_ci: string, _amount: string, _vTerminal: string){ //Pay Cashea Request with vTerminal

    return new Promise((resolve, reject)=>{
      try {

        if(_ci != null && _ci != '' && _amount != null && _vTerminal != null) {
          axios({
            method: 'post',
            url: environment.API_URL+'/api/cashea/create/request/'+_ci+'/'+_amount+'/'+_vTerminal+'/'+environment.TokenAPILaravel,
            /*data: {
              "accion":"creacionCashea",
              "montoTransaccion": _amount,
              "cedula": _ci,
              "terminalVirtual": _vTerminal
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

  //#--------------------------Cashea Confirmation proccess---------------------------------#//
  casheaConfirm(_id: number, _amount: string){ //Pay Cashea Confirmation

    return new Promise((resolve, reject)=>{
      try {

        if(_id != null && Number.isInteger(_id) && _amount != null) {
          axios({
            method: 'post',
            url: environment.API_URL+'/api/cashea/order/confirm/'+_id+'/'+_amount+'/'+environment.TokenAPILaravel,
            /*data: {
              "accion":"confirmacionCashea",
              "montoTransaccion": _amount,
              "idOrden": _id
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

  //#--------------------Cashea Confirmation proccess Vterminal-----------------------------#//
  casheaVtrmnlConfirm(_id: number,  _amount: string, _vTerminal: string){ //Pay Cashea Confirmation with vTerminal

    return new Promise((resolve, reject)=>{
      try {

        if(_id != null && Number.isInteger(_id)) {
          axios({
            method: 'post',
            url: environment.API_URL+'/api/cashea/order/confirm/'+_id+'/'+_amount+'/'+_vTerminal+'/'+environment.TokenAPILaravel,
            /*data: {
              "accion":"confirmacionCashea",
              "idOrden": _id,
              "terminalVirtual": _vTerminal
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

  //#--------------------------Cashea Cancelation proccess----------------------------------#//
  casheaCancel( _numSeqOrder: number){ //Pay Cashea Cancel

    return new Promise((resolve, reject)=>{
      try {

        if(Number.isInteger(_numSeqOrder)) {
          axios({
            method: 'post',
            url: environment.API_URL+'/api/cashea/order/cancel/'+_numSeqOrder+'/'+environment.TokenAPILaravel,
            /*data: {
              "accion":"cancelacionCashea",
              "numSeqOrden": _numSeqOrder,
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

  //#---------------------Cashea Cancelation proccess Vterminal-----------------------------#//
  casheaVtrmnlCancel( _numSeqOrder: number, _vTermial: string){ //Pay Cashea Cancel with vTerminal

    return new Promise((resolve, reject)=>{
      try {

        if( _vTermial != null && _vTermial != ''  && Number.isFinite(_numSeqOrder)) {
          axios({
            method: 'post',
            url: environment.API_URL+'/api/cashea/order/cancel/'+_numSeqOrder+'/'+_vTermial+'/'+environment.TokenAPILaravel,
            /*data: {
              "accion":"cancelacionCashea",
              "numSeqOrden": _numSeqOrder,
              "terminalVirtual": _vTermial
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

}
