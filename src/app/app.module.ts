import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// import { JwtModule } from '@auth0/angular-jwt';
// import { AuthInterceptor } from './auth.interceptor';
// import { environment } from '@environments/environment';
// import { PrintVoucherComponent } from '@components/printvoucher/print-voucher/print-voucher.component';
// import { VauchersPrintServicesService } from '@service/VPOSUniversal/request/administrave/printVauchers/vauchers-print-services.service';
// import { AppComponent } from './app.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({

    declarations: [],
    imports: [
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule 
    ],
    providers: [],
    bootstrap: []

  // declarations: [],
  // imports: [
  //   CommonModule,
  //   ReactiveFormsModule,
  //   VauchersPrintServicesService,
  //   // HttpClientModule,
  //   //     JwtModule.forRoot({
  //   //         config: {
  //   //             tokenGetter: tokenGetter,
  //   //             allowedDomains: [environment.API_URL],
  //   //             disallowedRoutes: [environment.API_URL+'/api/create-token'],
  //   //         },
  //   //     }),
  // ],

  // // providers: [
  // //   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  // // ],

})
export class AppModuleModule { }
