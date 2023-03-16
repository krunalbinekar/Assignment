import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AlertConfig, AlertModule} from 'ngx-bootstrap/alert';
import { ThemeModule } from '../themes/theme.module';
import { lightTheme } from '../themes/light-theme';
import { darkTheme } from '../themes/dark-theme';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: localStorage.getItem('theme')
    }),
  ],
  providers:[AlertConfig]
})
export class LoginModule { }
