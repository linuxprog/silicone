import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getAuthBackend } from '../../utils/authUtils';
import { CookieService } from 'ngx-cookie-service';
import { User } from '@core/models';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  public readonly authSessionKey = '_SILICON_AUTH_SESSION_KEY_'
  private cookieService = inject(CookieService)

  user!: User;
  currentUserValue: any;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient, private store: Store) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')!));
  }
  
  login(email: string, password: string) {
    return getAuthBackend()!.loginUser(email, password).then((response: any) => {
      const user = response;
      console.log(response);
      return user;
    });
  }

  logout() {
    console.log(getAuthBackend());
    return getAuthBackend()!.logout();
  }

  currentUser(): any {
    return getAuthBackend()!.getAuthenticatedUser();
  }

  resetPassword(email: string) {
    return getAuthBackend()!.forgetPassword(email).then((response: any) => {
      const message = response.data;
      return message;
    });
  }

  // login(email: string, password: string) {
  //   console.log(getFirebaseBackend());
  //   return getFirebaseBackend()!.loginUser(email, password).then((response: any) => {
  //     const user = response;
  //     return user;
  //   });
  // }

  // logout() {
  //   // remove user from cookie to log user out
  //   return getFirebaseBackend()!.logout();
  //   //this.removeSession()
  //   //this.user = null
  // }

// public currentUser(): any {
//       return getFirebaseBackend()!.getAuthenticatedUser();
// }

  //   resetPassword(email: string) {
  //     return getFirebaseBackend()!.forgetPassword(email).then((response: any) => {
  //         const message = response.data;
  //         return message;
  //     });
  // }
  get session(): string {
    return this.cookieService.get(this.authSessionKey)
  }

  saveSession(token: string): void {
    this.cookieService.set(this.authSessionKey, token)
  }

  removeSession(): void {
    this.cookieService.delete(this.authSessionKey)
  }


}
