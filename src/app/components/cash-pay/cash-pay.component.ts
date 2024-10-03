import { Component } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';

@Component({
  selector: 'app-cash-pay',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './cash-pay.component.html',
  styleUrl: './cash-pay.component.css'
})
export class CashPayComponent {

  titleC = 'Pagar con Efectivo.';

}
