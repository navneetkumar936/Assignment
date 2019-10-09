import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  public serverError:any;

  constructor(public fb:FormBuilder, public dataService : DataService) { 
    this.loginForm = fb.group({
      email : ['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      password : ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  submit(value){
    if(value){
      this.dataService.login(value).subscribe(
        res => {
          console.log(res);
        },
        (err:any) => {
          this.serverError = err.error
          console.log(err);
        }
      )
    }
    
  }

}
