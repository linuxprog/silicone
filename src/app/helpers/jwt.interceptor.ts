import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { AuthenticationService } from '@core/services/auth.service'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<Request>,
    next: HttpHandler
  ): Observable<HttpEvent<Event>> {
    // add authorization header with jwt token if available
    const authenticationService = inject(AuthenticationService)
    const token = authenticationService.session
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
    }

    return next.handle(request)
  }
}
