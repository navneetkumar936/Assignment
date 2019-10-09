import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  public jobForm: FormGroup;
  public sending = false;
  public experienceArr = [
    "<1", "1-3", "3-5", "5-7", "7-10", "10+"
  ]

  constructor(public dataService: DataService, public fb: FormBuilder, public sharedService: SharedService) {
    this.jobForm = this.fb.group({
      jobName: ['', Validators.compose([Validators.required])],
      experience: [null, Validators.compose([Validators.required])],
      skill: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  postJob(value) {
    this.sending = true;
    if (this.jobForm.valid) {
      this.dataService.postJob(value).subscribe(
        (res: any) => {
          this.sending = false;
          this.sharedService.showSuccess(res.msg);
          this.jobForm.reset();
          console.log(res);
        },
        (err: any) => {
          console.log(err);
          this.sending = false;
          this.sharedService.showSuccess(err.error);
        }
      )
    }
  }

}
