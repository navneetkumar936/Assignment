import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import urls from './../config';

@Injectable({
    providedIn : 'root'
})

export class DataService {
    constructor (
      public http : HttpClient,
    ){

    }

    setHeader() {
        var headers = new HttpHeaders();
        if (localStorage.getItem('token')) {
            headers = headers.set('x-auth-token', localStorage.getItem('token'));
        }
        return { headers: headers };
    }

    login(payload){
        return this.http.post(`${urls.baseurl}${urls.login}`, payload, this.setHeader());
    }

    register(payload){
        return this.http.post(`${urls.baseurl}${urls.register}`, payload, this.setHeader());
    }
}




