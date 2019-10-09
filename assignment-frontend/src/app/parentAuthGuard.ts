import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';

@Injectable({
  providedIn : 'root'
})

export class ParentUserGuard implements CanActivate{
  
  constructor(
    public router:Router
  ){
  }
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {

        if(next.data.page === 'dashboard'){
          if (this.isLoggedIn()) {
            return true;
          } else {
            this.router.navigate(['/'], {
              queryParams: {
                return: state.url
              }
            });
            return false;
          }
      }

      if(next.data.page === 'main'){
        if (!this.isLoggedIn()) {
          return true;
        } else {
          this.router.navigate(['/dashboard/apply'], {
            queryParams: {
              return: state.url
            }
          });
          return false;
        }
    }
  
    }

    public isLoggedIn(){
      return !!localStorage.getItem('token');
    }
  }