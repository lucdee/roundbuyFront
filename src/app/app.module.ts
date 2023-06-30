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

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    MenuTopComponent,
    FooterMobileComponent,
    FooterMobileComponent,
  ],
  imports: [
    BrowserModule,
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
