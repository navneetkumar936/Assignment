import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApplyjobsComponent } from './applyjobs/applyjobs.component';
import { AppliedcandidatesComponent } from './appliedcandidates/appliedcandidates.component';
import { PostjobComponent } from './postjob/postjob.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildUserGuard } from './childAuthGuard';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'post',
                canActivate: [ChildUserGuard],
                data: {
                    page: false
                },
                component: PostjobComponent,
            },
            {
                path: 'apply',
                canActivate: [ChildUserGuard],
                data: {
                    page: true
                },
                component: ApplyjobsComponent
            },
            {
                path: 'applied',
                canActivate: [ChildUserGuard],
                data: {
                    page: false
                },
                component: AppliedcandidatesComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }
