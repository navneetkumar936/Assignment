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

    list(){
        return this.http.get(`${urls.baseurl}${urls.post}`, this.setHeader())
    }

    apply(payload){
        return this.http.post(`${urls.baseurl}${urls.apply}`, payload, this.setHeader());
    }

    postJob(payload){
        return this.http.post(`${urls.baseurl}${urls.post}`,payload, this.setHeader());
    }

    applicants(){
        return this.http.get(`${urls.baseurl}${urls.applicants}`, this.setHeader());        
    }
}




