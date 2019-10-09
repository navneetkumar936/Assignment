import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn : 'root'
})

export class ChildUserGuard implements CanActivate{
  
  constructor(
    public router:Router,
    public sharedService : SharedService
  ){
  }
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {

        if(next.data.page === this.sharedService.userDetails().isCandidate){
            return true;
          } else {
            return false;
          }
      

  
    }

  }