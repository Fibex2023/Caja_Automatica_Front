import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // constructor(private http: HttpClient) {}

    // generateToken() {
    //     this.http.post(environment.API_URL+'/api/create-token', {}).subscribe((response: any) => {
    //         localStorage.setItem('access_token', response.token);
    //     });
    // }
}
