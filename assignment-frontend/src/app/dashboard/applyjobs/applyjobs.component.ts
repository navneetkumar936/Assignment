import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-applyjobs',
  templateUrl: './applyjobs.component.html',
  styleUrls: ['./applyjobs.component.css']
})
export class ApplyjobsComponent implements OnInit {

  public jobArr = [];

  constructor( public dataService : DataService, public sharedService : SharedService ) { }

  ngOnInit() {
    this.jobList();
  }

  jobList(){
    this.dataService.list().subscribe(
      (res:any) => {
        this.jobArr = res;
      },
      (err:any) => {
        console.log(err);
      }
    )
  }

  apply(job){
    this.dataService.apply({ jobId : job._id }).subscribe(
      (res:any) => {
        this.sharedService.showSuccess(res.msg);
      },
      (err:any) => {
        console.log(err);
        this.sharedService.showError(err.error);
      }
    )
  }

}
