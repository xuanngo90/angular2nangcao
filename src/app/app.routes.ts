import {Routes, RouterModule} from '@angular/router'; 
import {HomeComponent} from './pages/home.component';
import {EmployeListComponent} from './employe.component';

const routing : Routes = [
    {path: '' , component: HomeComponent},
    {path: 'employees' , component: EmployeListComponent},
    {path: '**', component: NotfoundComponent}
]

export const appRoutes = RouterModule.forRoot(routing);