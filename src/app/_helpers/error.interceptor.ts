import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authenticationService: LoginServiceService,
    private router: Router) { }

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
return next.handle(request).pipe(catchError(err => {
if (err.status === 401) {
  // auto logout if 401 response returned from api
  if(err.url.indexOf('/api/v1/login') == -1 && err.error.error.match("exist.") == -1 || err.url.indexOf('/api/v1/login') == -1 && err.error.error.match("Incorrect") == -1){//
   // this.authenticationService.logout();
    this.router.navigate(['/error/unauthorized']);
  }
  // location.reload();
}
if(err.status === 403){
  if(err.url.indexOf('/api/v1/invite/user/resend') !== -1){
    const error = err.error.error || err.statusText;
    return throwError(error);
  }else if(err.url.indexOf('/api/v1/billing/customerportal/session') !== -1){
    const error = err.error.error || err.statusText;
    return throwError(error);
  }
  else if(err.error.error.search("is not authorized") == -1){
  this.router.navigate(['/error/forbidden']);
  }
}
// if(err.status === 404){
//   if(err.url.indexOf('/api/v1/invite/user') !== -1){
//     const error = err.error.error || err.statusText;
//     return throwError(error);
//   }else{
//     this.router.navigate(['/error/pagenotfound']);
//   }
// }
if(err.status === 500 || err.status === 501){
  if(err.url.indexOf('/api/v1/user') !== -1){
    const error = err.error.error || err.statusText;
    return throwError(error);
  } else if(err.url.indexOf('/api/v1/password') !== -1){
    const error = err.error.error || err.statusText;
    return throwError(error);
  } else if(err.url.indexOf('/api/v1/workflow') !== -1){
    const error = err.error.error || err.statusText;
    return throwError(error);
  } else if(err.url.indexOf('/api/v1/organizations') !== -1){
    const error = err.error.error || err.statusText;
    return throwError(error);
  } else if(err.url.indexOf('/api/v1/email/verify') !== -1){
    const error = err.error.error || err.statusText;
    return throwError(error);
  } else{
    this.router.navigate(['/error/servererror']);
  }
}
const error = err.error.error || err.statusText;
return throwError(error);
}));
}
}
