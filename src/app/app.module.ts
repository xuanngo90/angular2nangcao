import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeListComponent } from './employe.component';
import { HomeComponent } from './pages/home.component';

import { appRoutes } from './app.routes';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeProjectComponent } from './employee-project.component';
import { EmployeeOverviewComponent } from './employee-overview.component';

import { EmployeeService } from './service/employe.service';

import {LoginService} from './service/login.service';
import { LoginComponent } from './login.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';

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
    NotFoundComponent,
    EmployeeDetailComponent,
    EmployeeProjectComponent,
    EmployeeOverviewComponent,
    LoginComponent,
  ],
  providers: [
    EmployeeService,
    LoginService,
    CheckLoginGuard,
    CheckSaveFormGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
