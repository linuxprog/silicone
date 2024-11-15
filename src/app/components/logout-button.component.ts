import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@core/services/auth.service';

@Component({
  selector: 'logout-button',
  standalone: true,
  imports: [CommonModule],
  styles: `
    :host(logout-button) {
      display: contents;
    }
  `,
  template: `
    <button
      class="btn btn-primary"
      [ngClass]="buttonClassName"
      (click)="logout()"
    >
      <i class="bx bx-log-out" [ngClass]="iconClassName"></i>
      &nbsp;Logout
    </button>
  `,
})
export class LogoutButtonComponent {
  buttonClassName?: string;
  iconClassName?: string;
  router = inject(Router)
  // state = inject(RouterStateSnapshot);
  
  constructor(private AuthenticationService: AuthenticationService) {}

  logout() {
    this.AuthenticationService.logout().then((res: any) => {
      this.router.navigate(['/']);
    })
    .catch(error => {
      //this.error = error ? error : '';
      console.log(error);
    //this.toastService.show(error, { classname: 'bg-danger text-white', delay: 15000 });
    });

    // const auth = getAuth();
    // signOut(auth).then(() => {
    //   console.log('User signed out successfully');
    //   // Redirect or show message after logout if needed
    //   this.router.navigate(['/']);
    // }).catch((error) => {
    //   console.error('Error signing out:', error);
    // });
  }
}
