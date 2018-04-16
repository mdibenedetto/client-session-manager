import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
    private _registerUrk = "http://localhost:5000/api/register";
    private _loginUrk = "http://localhost:5000/api/login";


    constructor(private http: HttpClient, private router: Router) {

    }

    registerUser(user) {
        return this.http.post < any > (this._registerUrk, user);
    }

    loginUser(user) {
        return this.http.post < any > (this._loginUrk, user);
    }

    logoutUser(user) {
        localStorage.removeItem('token');
        this.router.navigate(['/events']);
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

    getToken() {
        return localStorage.getItem('token');
    }

}