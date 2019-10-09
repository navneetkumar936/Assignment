import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  public serverError:any;
  public sending = false;

  constructor(public fb:FormBuilder, public dataService : DataService, public router : Router) { 
    this.loginForm = fb.group({
      email : ['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      password : ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  submit(value){
    if(value){
      this.sending = true;
      this.dataService.login(value).subscribe(
        (res:any) => {
          this.sending = false;
            localStorage.setItem('token', res.token);
            localStorage.setItem('userDetails', JSON.stringify(res));
            if(res.isCandidate)
              this.router.navigate(['/dashboard/apply']);
            else
              this.router.navigate(['/dashboard/post']);
        },
        (err:any) => {
          this.sending = false;
          this.serverError = err.error
          console.log(err);
        }
      )
    }
    
  }

}
