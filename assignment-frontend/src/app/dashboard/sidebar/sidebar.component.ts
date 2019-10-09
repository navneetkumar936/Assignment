import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public userDetails : any;

  constructor( public sharedService : SharedService ) { }

  ngOnInit() {
    this.userDetails = this.sharedService.userDetails();
    
  }

}
