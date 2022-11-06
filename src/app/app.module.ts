import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import {ImageModule} from 'primeng/image';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    SharedModule,
    MenubarModule,
    HttpClientModule,
    ImageModule,
    ToolbarModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
