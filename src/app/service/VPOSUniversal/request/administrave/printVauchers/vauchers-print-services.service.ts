import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VauchersPrintServicesService {
    
  private apiUrl = 'http://localhost:3000/print'; // URL del servidor  
  private _http: any;

    constructor() { }

    printText(text: string, _http: HttpClient) {
        return this._http.post(this.apiUrl, { text });
    }
}


// import { Injectable } from '@angular/core';
// // import * as escpos from 'escpos';

// @Injectable({
//   providedIn: 'root'
// })
// export class VauchersPrintServicesService {
//   // constructor() { }

//   // printFile(file: File) {
//   //   const device = new escpos.USB();
//   //   const printer = new escpos.Printer(device);

//   //   device.open(() => {
//   //     const reader = new FileReader();
      
//   //     reader.onload = (event) => {
//   //       const data = event.target?.result as string;

//   //       printer
//   //         .text(data)
//   //         .cut()
//   //         .close();
//   //     };

//   //     reader.onerror = (err) => {
//   //       console.error('Error reading file:', err);
//   //     };

//   //     // Lee el archivo como texto
//   //     reader.readAsText(file);
//   //   });
//   // }

//   generarVoucher(transaccion: any): string {
//     return `
//       =====================
//       VOUCHER DE COMPRA
//       =====================
//       ID Transacción: ${transaccion.id}
//       Fecha: ${transaccion.fecha}
//       Total: $${transaccion.total}
//       Estado: ${transaccion.estado}
//       =====================
//       ¡Gracias por su compra!
//     `;
//   }

//   imprimirVoucher(contenido: string) {
//     const ventanaImpresion = window.open('', '', 'height=400,width=300');
//     ventanaImpresion.document.write('<pre>' + contenido + '</pre>');
//     ventanaImpresion.document.close();
//     ventanaImpresion.print();
//   }

// }


