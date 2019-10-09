import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ParentUserGuard } from './parentAuthGuard';

const routes : Routes =[
    {
        path : '',
        canActivate: [ParentUserGuard],
        data : {
            page : 'main'
        },
        loadChildren : './main/main.module#MainModule'
    },
    {
        path : 'dashboard',
        canActivate: [ParentUserGuard],
        data : {
            page : 'dashboard'
        },
        loadChildren : './dashboard/dashboard.module#DashboardModule'
    }
]

@NgModule({

    imports : [ RouterModule.forRoot(routes,{useHash:true}) ],
    exports : [RouterModule]

})

export class AppRoutingModule { }
