import {Routes,RouterModule} from '@angular/router';
import {dashboardRoutes} from './dashboard/dashboard.route';
import {ModuleWithProviders} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';

export const routes: Routes = [
{
 path: '',
 pathMatch:'full',
 component :DashboardComponent
},
...dashboardRoutes
]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);