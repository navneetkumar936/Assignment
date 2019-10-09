import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userDetail : any;

  constructor( public sharedService : SharedService ) { }

  ngOnInit() {
    this.userDetail = this.sharedService.userDetails();
  }

  logOut(){
    this.sharedService.logout();
  }

}
