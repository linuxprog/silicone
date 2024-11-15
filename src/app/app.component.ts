import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { TitleService } from '@core/services/title.service';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackToTopComponent, PreloaderComponent,RouterModule],
  styles: `
    :host(app-root) {
      display: contents;
    }
  `,
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private titleService: TitleService) {}
  ngOnInit(): void {
    this.titleService.init()
  }

  
}
// Bootstrap the app and provide Firebase and other services
bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
}).catch(err => console.error(err));