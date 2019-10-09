import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyjobsComponent } from './applyjobs/applyjobs.component';
import { AppliedcandidatesComponent } from './appliedcandidates/appliedcandidates.component';
import { PostjobComponent } from './postjob/postjob.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared.module';
import { ChildUserGuard } from './childAuthGuard';

@NgModule({
  declarations: [ApplyjobsComponent, AppliedcandidatesComponent, PostjobComponent, DashboardComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  providers : [ChildUserGuard]
})
export class DashboardModule { }
