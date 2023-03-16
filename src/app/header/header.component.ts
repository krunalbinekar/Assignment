import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import { ThemeService } from '../themes/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
colour:any;
currentUser:any;
  constructor(private themeService : ThemeService,
    private service : LoginServiceService,
    private router : Router) {
      const a = localStorage.getItem('theme')
      if(a == undefined || a == null){
        localStorage.setItem('theme','light')
      }
     }

  ngOnInit(): void {
    this.service.currentUser.subscribe(x => {
      this.currentUser = x;
      // if (this.currentUser !== null && this.currentUser!==undefined && this.currentUser) {

      // }
    });
    setTimeout(() => {
      this.colour = localStorage.getItem('theme')
    },500)
    
  }
  toggle(colour) {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
      localStorage.setItem('theme','dark');
      this.colour = 'dark';
      window.location.reload();
    }
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.service.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  togglee(colour) {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'dark') {
        this.themeService.setTheme('light');
        localStorage.setItem('theme','light');
        this.colour = 'light';
      window.location.reload();
    } 
  }
}
