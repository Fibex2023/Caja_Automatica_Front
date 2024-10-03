import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CasheavposuniversalService {

  constructor() { }

  //#----------------------------Cashea requests proccess----------------------------------#//
  casheaRequest(_ci: string, _amount: number){ //Pay Cashea Request

    return new Promise((resolve, reject)=>{
      try {

        if(_ci != null && _ci != '' && Number.isFinite(_amount)) {
          axios({
            method: 'post',
            url: environment.API_URL+'/api/cashea/create/request/'+_ci+'/'+_amount,
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
  casheaVtrmnlRequest(_ci: string, _amount: number, _vTerminal: string){ //Pay Cashea Request with vTerminal

    return new Promise((resolve, reject)=>{
      try {

        if(_ci != null && _ci != '' && Number.isFinite(_amount)) {
          axios({
            method: 'post',
            url: environment.API_URL+'/api/cashea/create/request/'+_ci+'/'+_amount+'/'+_vTerminal,
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
  casheaConfirm(_id: number, _amount: number){ //Pay Cashea Confirmation

    return new Promise((resolve, reject)=>{
      try {

        if(_id != null && Number.isInteger(_id) && Number.isFinite(_amount)) {
          axios({
            method: 'post',
            url: environment.API_URL+'/api/cashea/order/confirm/'+_id+'/'+_amount,
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
  casheaVtrmnlConfirm(_id: number,  _amount: number, _vTerminal: string){ //Pay Cashea Confirmation with vTerminal

    return new Promise((resolve, reject)=>{
      try {

        if(_id != null && Number.isInteger(_id)) {
          axios({
            method: 'post',
            url: environment.API_URL+'/cashea/order/confirm/'+_id+'/'+_amount+'/'+_vTerminal,
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
            url: environment.API_URL+'/api/cashea/order/cancel/'+_numSeqOrder,
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
            url: environment.API_URL+'/api/cashea/order/cancel/'+_numSeqOrder+'/'+_vTermial,
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
