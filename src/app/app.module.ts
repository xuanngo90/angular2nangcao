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
    EmployeeOverviewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
