import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TopbarComponent } from '@components/topbar/topbar.component';
import { AuthenticationService } from '@core/services/auth.service';
import { Store } from '@ngrx/store';
import { credits } from '@states/constants';
import { ToastService } from '@core/services/toast-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [TopbarComponent, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signin.component.html',
  styles: `
    :host(app-signin) {
      display: contents;
    }
  `,
})
export class SigninComponent {
  loginForm!: FormGroup
  creditsBy = credits
  formSubmitted: boolean = false
  showPassword: boolean = false
  store = inject(Store)
  passwordType: string = 'password'
  error = '';
  returnUrl!: string;
  // set the current year
  year: number = new Date().getFullYear();
  submitted = false;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    public toastService: ToastService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUser()) {
      this.router.navigate(['/ads']);
    }

    
  }


  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  get f() { return this.loginForm.controls; }

  /**
   * convenience getter for easy access to form fields
   */
  get formValues() {
    return this.loginForm.controls
  }

  /**
   * On submit form
   */
  onSubmit(): void {
    console.log("onSubmit Form");
    this.formSubmitted = true


    if (this.loginForm.invalid) {
      console.log("error Form");
      return;
    } else {
      console.log("Auth Form"+environment.defaultauth);
      // if (environment.defaultauth === 'firebase') {
        this.authenticationService.login(this.f['email'].value, this.f['password'].value).then((res: any) => {
          this.router.navigate(['/ads']);
        })
          .catch(error => {
            this.error = error ? error : '';
            console.log(error);
          this.toastService.show(error, { classname: 'bg-danger text-white', delay: 15000 });
          });
      // }
    }


    // if (this.loginForm.valid) {
    //   const email = this.formValues['email'].value // Get the username from the form
    //   const password = this.formValues['password'].value // Get the password from the form

    //   // Login Api
    //   this.store.dispatch(login({ email: email, password: password }))
    // }
  }

  changePasswordType(event: any) {
    this.passwordType = event.target.checked ? 'text' : 'password'
  }
}
