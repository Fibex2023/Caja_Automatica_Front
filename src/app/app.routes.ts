import { Routes } from '@angular/router';
import { HomePaymentsComponent } from './components/home-payments/home-payments.component';
/*import { CardPayComponent } from './components/card-pay/card-pay.component';
import { CashPayComponent } from './components/cash-pay/cash-pay.component';
import { ZellePayComponent } from './components/zelle-pay/zelle-pay.component';
import { MobilePaymentPayComponent } from './components/mobile-payment-pay/mobile-payment-pay.component';
import { PayMethodComponent } from './components/pay-method/pay-method.component';*/

export const routes: Routes = [

  {path: '', component: HomePaymentsComponent, pathMatch: 'full'},
  //{path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'},

  //{path: 'paymetohd', component: PayMethodComponent, pathMatch: 'full'},

  //{path: 'cardpay', component: CardPayComponent, pathMatch: 'full'},

  //{path: 'cashpay', component: CashPayComponent, pathMatch: 'full'},

  //{path: 'zellepay', component: ZellePayComponent, pathMatch: 'full'},

  //{path: 'mobilepayment', component: MobilePaymentPayComponent, pathMatch: 'full'}

];
