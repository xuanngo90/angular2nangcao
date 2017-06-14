import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { EmployeListComponent } from './employe.component';

import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeProjectComponent } from './employee-project.component';
import { EmployeeOverviewComponent } from './employee-overview.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    // { path: '', redirectTo: 'employees', pathMatch: 'full' },    
    { path: 'employees', component: EmployeListComponent },
    { 
        path: 'employee-detail/:id', 
        component: EmployeeDetailComponent,
        children: [
            { path: 'project', component: EmployeeProjectComponent },
            { path: 'overview', component: EmployeeOverviewComponent }
        ] },
    { path: '**', component: NotFoundComponent }
]

export const appRoutes = RouterModule.forRoot(routing);