import { Injectable } from "@angular/core";
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Injectable({
    providedIn : 'root'
})

export class SharedService {
    constructor (public router :Router){

    }

    logout(){
        localStorage.clear();
        this.router.navigate(['/'])
    }

    showError(error){
        Swal.fire({
            title : 'Error!',
            text : error,
            type : 'error'
        })
    }

    showSuccess(msg){
        Swal.fire({
            title : 'Success',
            text : msg,
            type : 'success'
        })
    }

    userDetails(){
        return JSON.parse(localStorage.getItem('userDetails'));
    }

}




