import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { EmployeListComponent } from './employe.component';
import { NotFoundComponent } from './notfound.component';

const routing: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', redirectTo: 'employees', pathMatch: 'full' },    
    { path: 'employees', component: EmployeListComponent },
    { path: '**', component: NotFoundComponent }
]

export const appRoutes = RouterModule.forRoot(routing);