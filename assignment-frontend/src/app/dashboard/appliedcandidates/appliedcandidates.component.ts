import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-appliedcandidates',
  templateUrl: './appliedcandidates.component.html',
  styleUrls: ['./appliedcandidates.component.css']
})
export class AppliedcandidatesComponent implements OnInit {

  public applicantArr = [];

  constructor( public dataService : DataService, public sharedService : SharedService ) { }

  ngOnInit() {
    this.applicantList();
  }

  applicantList(){
    this.dataService.applicants().subscribe(
      (res:any) => {
        this.applicantArr = res;
      },
      (err:any) => {
        console.log(err);
      }
    )
  }

}
