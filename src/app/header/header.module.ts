import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { darkTheme } from '../themes/dark-theme';
import { lightTheme } from '../themes/light-theme';
import { ThemeModule } from '../themes/theme.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: localStorage.getItem('theme')
    }),
    MatButtonToggleModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
