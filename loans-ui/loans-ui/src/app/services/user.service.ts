import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(){
    let url = environment.USER.BASE_URL+"/"+environment.USER.GET_ALL_USERS;
    return this.http.get(url);
  }

  viewUser(id: string){
    let url = environment.USER.BASE_URL + "/" + environment.USER.GET_USER + "/" + id;
    return this.http.get(url);
  }

  

  addUser(userObject: any){

  }

  updateUser(id: number, userObject: any){

  }

  deleteUser(id:number){

  }
}
