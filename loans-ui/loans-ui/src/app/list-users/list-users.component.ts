import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  userList : any;
  listOfUsers :any;
  
  ngOnInit(): void {
    window.onload = () => {
      this.getUserList();
    }
  }
  getUserList(){
    this.userService.getUsers().subscribe( data => {
      this.userList=data;
      this.listOfUsers = this.userList.users;
      console.log(this.listOfUsers);
    })
  }
    
}
