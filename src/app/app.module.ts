import { A11yModule } from '@angular/cdk/a11y';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderModule } from './header/header.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { ThemeModule } from './themes/theme.module';
import { lightTheme } from './themes/light-theme';
import { darkTheme } from './themes/dark-theme';
import { FooterModule } from './footer/footer.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,
    CdkAccordionModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatButtonModule,
    MatButtonModule,
    MatStepperModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatRippleModule,
    MatToolbarModule,
    MatTooltipModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    HeaderModule,
    HttpClientModule,
    FooterModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: localStorage.getItem('theme')
    })
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  },

  // provider used to create fake backend
  fakeBackendProvider,],
  bootstrap: [AppComponent]
})
export class AppModule { }
