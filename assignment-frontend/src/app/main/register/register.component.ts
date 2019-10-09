import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public serverError : any;
  public sending = false;

  constructor(public fb: FormBuilder, public dataService : DataService, public router : Router, public sharedService : SharedService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      isCandidate : [false],
      passwords: this.fb.group({
        password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
      }, { validator: this.checkPasswords })
    });
  }

  checkPasswords(group: FormGroup) { 
    return group.get('password').value === group.get('confirmPassword').value ? null : { notSame: true }
  }

  ngOnInit() {
  }

  submit(value){
    if(value){
      let payload = {
        name : value.name,
        email : value.email,
        password : value.passwords.password,
        isCandidate : value.isCandidate
      }
      this.sending = true;
      this.dataService.register(payload).subscribe(
        (res:any) => {
          this.sending = false;
          this.sharedService.showSuccess('Registered uccesfully')
          this.router.navigate(['/']);
        },
        (err:any) => {
          this.sending = false;
          this.serverError = err.error;
          console.log(err);
        }
      )
    }
    
  }

}
