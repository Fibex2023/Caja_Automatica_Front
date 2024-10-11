import { Component } from '@angular/core';
// import { VauchersPrintServicesService } from '@service/VPOSUniversal/request/administrave/printVauchers/vauchers-print-services.service';

// declare function printPDF(url: string): void; // Declarar la función del plugin

@Component({
  selector: 'app-print-voucher',
  standalone: true,
  imports: [],
  templateUrl: './print-voucher.component.html',
  styleUrl: './print-voucher.component.css'
})
export class PrintVoucherComponent {

  constructor() { }



  // ngOnInit(): void {
  //   this.imprimirFactura();
  // }

  // imprimirFactura(): void {
  //   const contenido = document.getElementById('voucherToPrint')?.innerHTML;
  //   const ventanaImpresion = window.open('', '', 'width=600,height=400');;
  //   ventanaImpresion!.document.write(`
  //     <html>
  //       <head>
  //         <title>Imprimir Factura</title>
  //         <style>
  //           body { font-family: Arial, sans-serif; }
  //           /* Agrega aquí más estilos si es necesario */
  //         </style>
  //       </head>
  //       <body onload="window.print(); window.close();">
  //         ${contenido}
  //       </body>
  //     </html>
  //   `);
  //   ventanaImpresion!.document.close();
  // }
  
}
