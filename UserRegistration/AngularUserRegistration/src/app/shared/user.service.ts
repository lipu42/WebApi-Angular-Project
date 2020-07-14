import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import{Response} from '@angular/http'
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl="https://localhost:44355";
  constructor(private http:HttpClient) { }

  registerUser(user : User){
    const body :  User = {
      UserName:user.UserName,
      Password:user.Password,
      Email:user.Email,
      FirstName:user.FirstName,
      LastName:user.LastName
    }
    return this.http.post(this.rootUrl + '/api/User/Registration',body);
  }
}
