import {Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { AboutComponent } from '../../about/about.component';
import { AdminComponent } from '../../admin/admin.component';
import { LogonComponent } from '../../security/logon.component';
import { LogoutComponent } from '../../security/logout.component';
import { TopNavComponent } from '../topnav/topnav';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard.html',
  directives: [ROUTER_DIRECTIVES, TopNavComponent, SidebarComponent]
})

@Routes([
    { path: '/home', component: HomeComponent },
    { path: '/chart', component: ChartComponent },
    { path: '/table', component: TableComponent },
	{ path: '/forms', component: FormComponent },
	{ path: '/element', component: BSElementComponent},
	{ path: '/grid', component: GridComponent },
	{ path: '/component', component: NG2Component },
	{ path: '/blank-page', component: BlankPageComponent }
])

export class DashboardComponent { }
