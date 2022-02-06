import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface authResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<authResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCDJAnNLJYpfHPGDeTRSWtZjeL4DeRYtSs',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
