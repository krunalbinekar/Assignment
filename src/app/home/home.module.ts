import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ThemeModule } from '../themes/theme.module';
import { lightTheme } from '../themes/light-theme';
import { darkTheme } from '../themes/dark-theme';
import { ModalModule } from "ngx-bootstrap/modal";
import {NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';
@NgModule({
  declarations: [
    HomeComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatPaginatorModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: localStorage.getItem('theme')
    }),
    ModalModule.forRoot(),
    NgbModule,
    NgbCollapseModule,
    FormsModule,
    FooterModule
  ]
})
export class HomeModule { }
