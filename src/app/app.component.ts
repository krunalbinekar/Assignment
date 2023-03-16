import { Component } from '@angular/core';
import { ThemeService } from './themes/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Krunal-Binekar-Movies-Project';

  constructor(private themeService: ThemeService){
    const a = localStorage.getItem('theme')
      if(a == undefined || a == null){
        localStorage.setItem('theme','light')
      }
  }

  toggle() {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }
}
