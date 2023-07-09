import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import { FooterMobileComponent } from './components/footer-mobile/footer-mobile.component';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    FooterMobileComponent,
    FooterMobileComponent,
    LoginComponent,
    ProfileComponent,
    MenuTopComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
   FontAwesomeModule,
    MatSlideToggleModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
