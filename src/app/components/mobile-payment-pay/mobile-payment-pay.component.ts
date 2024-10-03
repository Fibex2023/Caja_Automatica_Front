import { Component } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';

@Component({
  selector: 'app-mobile-payment-pay',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './mobile-payment-pay.component.html',
  styleUrl: './mobile-payment-pay.component.css'
})
export class MobilePaymentPayComponent {

  titleMP = 'Pagar por Pago Movil.';

}
