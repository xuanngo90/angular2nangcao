import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeListComponent } from './employe.component';
import { HomeComponent } from './pages/home.component';

import {appRoutes} from './app.routes';
import {NotFoundComponent} from './notfound.component';

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
    HomeComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
