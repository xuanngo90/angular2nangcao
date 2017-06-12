import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeListComponent } from './employe.component';
import { HomeComponent } from './pages/home.component';

import {appRoutes} from './app.routes';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  declarations: [
    AppComponent,
    EmployeListComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
