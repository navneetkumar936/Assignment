import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApplyjobsComponent } from './applyjobs/applyjobs.component';
import { AppliedcandidatesComponent } from './appliedcandidates/appliedcandidates.component';
import { PostjobComponent } from './postjob/postjob.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [
    {
        path : '',
        component : DashboardComponent,
        children : [
            {
                path : 'post',
                component : PostjobComponent
            },
            {
                path : 'apply',
                component : ApplyjobsComponent
            },
            {
                path : 'applied',
                component : AppliedcandidatesComponent
            }
        ]
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class DashboardRoutingModule { }
