import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyjobsComponent } from './applyjobs/applyjobs.component';
import { AppliedcandidatesComponent } from './appliedcandidates/appliedcandidates.component';
import { PostjobComponent } from './postjob/postjob.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  declarations: [ApplyjobsComponent, AppliedcandidatesComponent, PostjobComponent, DashboardComponent, HeaderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
