import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import axios from 'axios';
import cors from 'cors';

@Injectable({
  providedIn: 'root'
})

export class PrintVoucherService {

  constructor() { }

  printTitek(_dataClient: any){

    return new Promise((resolve, reject)=>{
      try {

        if(_dataClient) {
          axios({
            method: 'post',
            url: environment.API_Printer+'/generar-ticket',
            data: {
              'date': String(_dataClient[0]['date']),
              'refNumber': String(_dataClient[0]['refundNumber']),
              'nameClient': String(_dataClient[0]['nameClient']),
              'ciClient': String(_dataClient[0]['ciClient']),
              'abononumber': String(_dataClient[0]['abonumber']),
              'describe': String(_dataClient[0]['describe']),
              'amount': String(_dataClient[0]['amount']),
              'methodPayment': String(_dataClient[0]['methodPayment']),
              'totalAmount': String(_dataClient[0]['totalAmount']),
              'saldo': String(_dataClient[0]['saldo']),
              'status': String(_dataClient[0]['status']),
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

      console.log(`
        \'date\': ${_dataClient[0]['date']},
        \'refNumber\': ${_dataClient[0]['refundNumber']},
        \'nameClient\': ${_dataClient[0]['nameClient']},
        \'ciClient\': ${_dataClient[0]['ciClient']},
        \'abononumber\': ${_dataClient[0]['abonumber']},
        \'describe\': ${_dataClient[0]['describe']},
        \'amount\': ${_dataClient[0]['amount']},
        \'methodPayment\': ${_dataClient[0]['methodPayment']},
        \'totalAmount\': ${_dataClient[0]['totalAmount']},
        \'saldo\': ${_dataClient[0]['saldo']},
        \'status\': ${_dataClient[0]['status']},
      `);

      console.log(_dataClient);

    });

  }

}


// import { Injectable } from '@angular/core';
// import { environment } from '@environments/environment';
// import axios from 'axios';

// interface DataClient {
//     date: string,
//     refNumber: string,
//     nameClient: string,
//     ciClient: string,
//     abononumber: string,
//     describe: string,
//     amount: number, // Specify the type
//     methodPayment: string,
//     totalAmount: number // Specify the type
//     saldo: number, // Specify the type
//     status: string,
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class PrintVoucherService {

//   constructor() { }

//   printTitek(_dataClient: DataClient): Promise<any> {
//     return new Promise((resolve, reject) => {
//       try {
//         if (_dataClient) {
//           axios({
//             method: 'post',
//             url: `${environment.API_Printer}/generar-ticket`,
//             data: _dataClient
//           })
//           .then(res => {
//               console.log(res);
//               resolve(res);
//             })
//           .catch(err => {
//               console.error(err);
//               reject(new Error(err.response ? err.response.data : 'An error occurred while generating the ticket.'));
//           });
//         } else {
//           reject(new Error('Invalid validation, please check the fields and try again.'));
//         }
//       } catch (error) {
//         reject(error);
//       }
//     });
//   }
// }