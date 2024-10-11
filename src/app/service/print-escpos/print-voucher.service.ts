import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintVoucherService {

  private apiUrl = 'http://localhost:3000/print'; // URL del servidor

  constructor(private http: HttpClient) { }

  printText(text: string) {
    return this.http.post(this.apiUrl, { text });
  }
}