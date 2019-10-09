import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
// import { SuperAdminGuard } from './super-admin/super-admin.guard';

const routes : Routes =[
    {
        path : '',
        // canActivate: [SuperAdminGuard],
        loadChildren : './main/main.module#MainModule'
    },
    {
        path : 'dashboard',
        loadChildren : './dashboard/dashboard.module#DashboardModule'
    }
]

@NgModule({

    imports : [ RouterModule.forRoot(routes,{useHash:true}) ],
    exports : [RouterModule]

})

export class AppRoutingModule { }
