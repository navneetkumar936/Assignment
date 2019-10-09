import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main.routing';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
