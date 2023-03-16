import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject,  Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor(private http : HttpClient, private router: Router, ) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
}

  login(payload  :any){
    const path = 'https://demo.credy.in/api/v1/usermodule/login/'
    return this.http.post<any>(path , payload).pipe(map(user => {
      if(user.is_success){
        localStorage.setItem('currentUser',JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.router.navigate(['/home']);
        
      }
      return user;
    }),
    catchError(error => {
      return throwError(error);
    })
    )
  }

  moviesList(){
    const path = 'https://demo.cready.in/api/v1/maya/movies/'
    return this.http.get(path).pipe(map(res => res),catchError(error => {
      return throwError(error);
    })
    )
  }

  Avatar(){
    const path = 'https://ui-avatars.com/api/?background=random'
    return this.http.get(path).pipe(map(res => res),catchError(error => {
      return throwError(error);
    })
    )
  }
}
